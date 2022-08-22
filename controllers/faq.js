"use strict";

const logger = require("../utils/logger");

const faq = {
  index(request, response) {
    logger.info("faq rendering");
    const viewData = {
      title: "Frequently Asked Questions",
    };
    response.render("faq", viewData);
  },
};

module.exports = faq;
