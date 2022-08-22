"use strict";

const logger = require("../utils/logger");

const station = {
  reading: [
    {
      code: '100',
      temp: '10',
      windSpeed: '15',
      pressure: '1000',
    }
  ]
}

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const viewData = {
      title: "Template 1 Dashboard",
      station: reading
    };
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
