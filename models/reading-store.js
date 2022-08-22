'use strict';

const logger = require('../utils/logger');
const stationCollection = require('./reading-store.json').stationCollection;

/*const station = {
  title: 'Tramore',
  readings: [
    {
      code: '100',
      temp: '10',
      windSpeed: '15',
      pressure: '1000',
    }
  ]
};
*/
module.exports = stationCollection;