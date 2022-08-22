"use strict";

const logger = require("../utils/logger");
const station = require("../models/reading-store.js");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Template 1 Dashboard",
      station: station
    };
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
