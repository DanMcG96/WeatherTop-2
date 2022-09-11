'use strict';

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');
const stationAnalytics = require("../utils/station-analytics");
const uuid = require('uuid');


const station = {
  index(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId); 
    const code = request.params.code;
    const windSpeed = request.params.windSpeed;
    const windDirection = request.params.windDirection;
    const temp = request.params.temp;
    const lastReading = stationAnalytics.getLastReading(station);
    const doWeather = stationAnalytics.getWeatherCode(request);
    const dynamicIcon = stationAnalytics.getWeatherCode(request);
    const dynamicIconColour = stationAnalytics.getWeatherCode(request);
    const beaufort = stationAnalytics.getBeaufort(request);
    const tempInFarenheit = stationAnalytics.tempConversion(request);
    const windChill = stationAnalytics.windChill(request);
    const windCompass = stationAnalytics.windCompass(request);
 //   const minTemp = stationAnalytics.maxMinTemp(request);
 //   const maxTemp = stationAnalytics.maxMinTemp(request);
 //   const tempInFarenheit = (lastReading.temp * 1.8) + 32;
  
    
 /*  let doWeather = null;
   if (lastReading.code == 100)  { doWeather = "That's a start"}
  else if(lastReading.code == 200) {doWeather = "Working"}
  else if(lastReading.code == 300) {doWeather = "Working better"}
  else if(lastReading.code == 400) {doWeather = "Working Even Better"}
  else if(lastReading.code == 500) {doWeather = "Almost There"}
  else if(lastReading.code == 600) {doWeather = "That's the stuff"}
  else if(lastReading.code == 700) {doWeather = "One more to go"}
  else if(lastReading.code == 800) {doWeather = "Fini"}
*/    
 
    logger.info('Station id = ' + stationId);
    const viewData = {
      title: 'Station',
      station: stationStore.getStation(stationId),
      doWeather: doWeather,
      dynamicIcon: dynamicIcon,
      dynamicIconColour: dynamicIconColour,
      beaufort: beaufort,
      temp: temp,
      tempInFarenheit: tempInFarenheit,
      windChill: windChill,
      lastReading: lastReading,
      windCompass: windCompass,
   //   minTemp: minTemp,
  //    maxTemp: maxTemp
    
      
    };
    response.render('station', viewData);
  },
  
  
  
  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.info(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect('/station/' + stationId);
  },
  
  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      code: request.body.code,
      temp: request.body.temp,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
    };
    stationStore.addReading(stationId, newReading);
    response.redirect('/station/' + stationId)
    },
};

module.exports = station;







/*if(lastReading.code == 100) {
weather = newMap.get(100);
} 
else if(lastReading.code == 200) {
weather = newMap.get(200);
}
else if(lastReading.code == 300) {
weather = newMap.get(300);
}
else if(lastReading.code == 400) {
weather = newMap.get(400);
}
else if(lastReading.code == 500) {
weather = newMap.get(500);
}
else if(lastReading.code == 600) {
weather = newMap.get(600);
}
else if(lastReading.code == 700) {
weather = newMap.get(700);
}
else if(lastReading.code == 800) {
weather = newMap.get(800);
}
else {
  weather = "No valid readings found";
}
 */ 

