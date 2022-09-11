"use strict"

const logger = require('../utils/logger');
const stationStore = require('../models/station-store.js');

const uuid = require('uuid');




const stationAnalytics = {
  
  
  
  getLastReading(station) {
     let lastReading = null;
    if(station.readings.length > 0) {
      lastReading = station.readings[(station.readings.length -1)];
    }
    return lastReading;
  },
/*  getWeather(request, station) {
    const code = request.params.code;
    
    let weather = null;
    if(station.readings.length > 0) {
      if(station.lastReading.code = 100) {
        weather = 'A';
      }
      else if(station.lastReading.code = 200) {
        weather = 'B';
      }
      else if(station.lastReading.code = 300) {
        weather = 'B';
    }
      else if(station.lastReading.code = 400) {
        weather = 'B';
  }
      else if(station.lastReading.code = 500) {
        weather = 'B';
      }
      else if(station.lastReading.code = 600) {
        weather = 'B';
      }
      else if(station.lastReading.code = 700) {
        weather = 'B';
      }
      else if(station.lastReading.code = 800) {
        weather = 'B';
      }
    }else { weather = "Nil a fhios agam ";}
    return weather;
  } 
  */
  //Utility method to translate codes into human readable weather descriptions
  //Modh fóntais simplí chun uimhreacha a thiontú go tuarascálacha aimsire
  getWeatherCode(request) {
    const stationId = request.params.id;
     const station = stationStore.getStation(stationId); 
    const lastReading = stationAnalytics.getLastReading(station);
       let doWeather = null;
       let dynamicIcon = "cloud";
       let dynamicIconColour = "red";
    if(lastReading.code > 0) {
   if (lastReading.code == 100)  { doWeather = "Clear"; dynamicIcon = "cloud sun"; dynamicIconColour = "red"}
  else if(lastReading.code == 200) {doWeather = "Partial Clouds"; dynamicIcon = "cloud"; dynamicIconColour = "yellow" }
  else if(lastReading.code == 300) {doWeather = "Cloudy";  dynamicIcon = "cloud"; dynamicIconColour = "blue"}
  else if(lastReading.code == 400) {doWeather = "Light Showers"; dynamicIcon = "cloud rain"; dynamicIconColour = "green" }
  else if(lastReading.code == 500) {doWeather = "Heavy Showers"; dynamicIcon = "cloud rain"; dynamicIconColour = "purple"}
  else if(lastReading.code == 600) {doWeather = "Rain"; dynamicIcon = "cloud showers heavy"; dynamicIconColour = "pink"}
  else if(lastReading.code == 700) {doWeather = "Snow"; dynamicIcon = "snowflake"; dynamicIconColour = "grey"}
  else if(lastReading.code == 800) {doWeather = "Thunder"; dynamicIcon = "bolt"; dynamicIconColour = "orange"}
  else if(lastReading.code == 314) {doWeather = "Cloudy, with a chance of Meatballs"; dynamicIcon = "cloud meatball"; dynamicIconColour = "red"}    
  else if(!lastReading) { doWeather = "No Readings"}
  }
  return doWeather;
  return dynamicIcon;
  return dynamicIconColour;
  },
  
  getBeaufort(request) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const lastReading = stationAnalytics.getLastReading(station);
    let beaufort = null;
    if(lastReading.windSpeed > 0) {
    if (lastReading.windSpeed == 0) {
      beaufort = 0;
    } else if (lastReading.windSpeed >= 1 && lastReading.windSpeed <= 6) {
      beaufort = 1;
    } else if (lastReading.windSpeed >= 7 && lastReading.windSpeed <= 11) {
      beaufort = 2;
    } else if (lastReading.windSpeed >= 12 && lastReading.windSpeed <= 19) {
      beaufort = 3;
    } else if (lastReading.windSpeed >= 20 && lastReading.windSpeed <= 29) {
      beaufort = 4;
    } else if (lastReading.windSpeed >= 30 && lastReading.windSpeed <= 39) {
      beaufort = 5;
    } else if (lastReading.windSpeed >= 40 && lastReading.windSpeed <= 50) {
      beaufort = 6;
    } else if (lastReading.windSpeed >= 51 && lastReading.windSpeed <= 62) {
      beaufort = 7;
    } else if (lastReading.windSpeed >= 63 && lastReading.windSpeed <= 75) {
      beaufort = 8;
    } else if (lastReading.windSpeed >= 76 && lastReading.windSpeed <= 87) {
      beaufort = 9;
    } else if (lastReading.windSpeed >= 88 && lastReading.windSpeed <= 102) {
      beaufort = 10;
    } else if (lastReading.windSpeed >= 103 && lastReading.windSpeed <= 117) {
      beaufort = 11;
    } else if (lastReading.windSpeed >= 117) {
      beaufort = 12;
    }
    
  }
    return beaufort;
  },
  
  tempConversion(request) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const lastReading = stationAnalytics.getLastReading(station);
    let tempInFarenheit = null;
    if(lastReading.temp > 0) {
    tempInFarenheit = (lastReading.temp * 1.8) + 32;
    }
    return tempInFarenheit;
  },
  
  windChill(request) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const lastReading = stationAnalytics.getLastReading(station);
    let windChill = null;
    if(lastReading.windSpeed > 0) {
    windChill = Math.round((13.12 + (0.6215 * lastReading.temp) - 11.37*Math.pow((lastReading.windSpeed), 0.16)) + (0.3965 * lastReading.temp)*Math.pow(lastReading.windSpeed, 0.16)*100)/100.0;
    }
   return windChill;
  },
  
  windCompass(request) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const lastReading = stationAnalytics.getLastReading(station);
    let windCompass = null;
    if(lastReading.windDirection > 0) {
        if((lastReading.windDirection>=348.75)&&(lastReading.windDirection<=11.25))
        {
            windCompass = "North";
        }
        if((lastReading.windDirection>=11.25)&&(lastReading.windDirection<=33.75))
        {
            windCompass = "North North East";
        }
        if((lastReading.windDirection>=33.75)&&(lastReading.windDirection<=56.25))
        {
            windCompass = "North East";
        }
        if((lastReading.windDirection>=56.25)&&(lastReading.windDirection<=78.75))
        {
            windCompass = "East North East";
        }
        if((lastReading.windDirection>=78.75)&&(lastReading.windDirection<=101.25))
        {
            windCompass = "East";
        }
        if((lastReading.windDirection>=101.25)&&(lastReading.windDirection<=123.75))
        {
            windCompass = "East South East";
        }
        if((lastReading.windDirection>=123.75)&&(lastReading.windDirection<=146.25))
        {
            windCompass = "South East";
        }
        if((lastReading.windDirection>=146.25)&&(lastReading.windDirection<=168.75))
        {
            windCompass = "South South East";
        }
        if((lastReading.windDirection>=168.75)&&(lastReading.windDirection<=191.25))
        {
            windCompass = "South";
        }
        if((lastReading.windDirection>=191.25)&&(lastReading.windDirection<=213.75))
        {
            windCompass = "South by South West";
        }
        if((lastReading.windDirection>=213.75)&&(lastReading.windDirection<=236.25))
        {
            windCompass = "South West";
        }
        if((lastReading.windDirection>=236.25)&&(lastReading.windDirection<=258.75))
        {
            windCompass = "West South West";
        }
        if((lastReading.windDirection>=258.75)&&(lastReading.windDirection<=281.25))
        {
            windCompass = "West";
        }
        if((lastReading.windDirection>=281.25)&&(lastReading.windDirection<=303.75))
        {
            windCompass = "West North West";
        }
        if((lastReading.windDirection>=303.75)&&(lastReading.windDirection<=326.25))
        {
            windCompass = "North West";
        }
        if((lastReading.windDirection>=326.25)&&(lastReading.windDirection<=348.75))
        {
            windCompass = "North North West";
        }
    }
    return windCompass;
  },
  
  dynamicCodeIcon() {
    
  }
  
};
    

  
  



module.exports = stationAnalytics
