'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const stationStore = {

  store: new JsonStore('./models/playlist-store.json', { 
    stationCollection: [] 
  }),
  collection: "stationCollection",

  getAllStations() {
    return this.store.findAll(this.collection);
  },
  
  getUserStations(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },

  getStation(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addStation(station) {
    this.store.add(this.collection, station);
    this.store.save();
  },

  removeStation(id) {
    const station = this.getStation(id);
    this.store.remove(this.collection, station);
    this.store.save();
  },

  removeAllStations() {
    this.store.removeAll(this.collection);
    this.store.save();
  },
  
  
  addReading(id, reading) {
    const station = this.getStation(id);
    station.readings.push(reading);
    this.store.save();
  },

  removeReading(id, readingId) {
    const station = this.getStation(id);
    const readings = station.readings;
    _.remove(readings, { id: readingId});
    this.store.save();
  },
  
  getReading(id, readingId) {
    const station = this.store.findOneBy(this.collection, {id: id });
    const readings = station.readings.filter(reading => reading.id == readingId);
    return readings[0];
  },
  
  updateReading(reading, updatedReading) {
    reading.code = updatedReading.code;
    reading.temp = updatedReading.temp;
    reading.windSpeed = updatedReading.windSpeed;
    reading.windDirection = updatedReading.windDirection;
    reading.pressure = updatedReading.pressure;
    this.store.save();
  }
    
  
};

module.exports = stationStore;