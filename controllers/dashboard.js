"use strict";

const logger = require("../utils/logger");
const stationCollection = require("../models/reading-store.js");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Template 1 Dashboard",
      station: stationCollection,
    };
    logger.info('Rendering', );
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
