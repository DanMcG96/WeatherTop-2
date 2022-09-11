"use strict";

const accounts = require('./accounts.js');
const logger = require("../utils/logger");
const stationStore = require('../models/station-store.js');
const uuid = require('uuid');

const dashboard = {
  
  
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "WeatherTop 2 Dashboard",
      stations: stationStore.getUserStations(loggedInUser.id)
    };
    logger.info('about to render', stationStore.getAllStations());
    response.render("dashboard", viewData);
  },
  
  deleteStation(request, response) {
    const stationId = request.params.id;
    stationStore.removeStation(stationId); 
    response.redirect('/');
  },
  
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      title: request.body.title,
      readings: [
        {
         "id": uuid.v1(),
      //   "userid": loggedInUser.id,
         "code" : 100,
         "temp" : 10,
         "windSpeed" : 1,
         "windDirection" : 1,
         "pressure" : 1
       },
      ],
    };
    logger.debug("Creating a new Station", newStation);
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  },
  
};


module.exports = dashboard;

 


