/*
CONVERSIONS
This is a utility file that holds methods for dealing with various calculations in the app
such as working with weather codes, converting from celcius to farenheit, and converting wind speed
into beauforts etc.
*/


// Weather Codes Hash Map
  
let weathercodes = new Map();

weathercodes.set(100,"Clear");
weathercodes.set(200, "Partial Clouds");
weathercodes.set(300, "Cloudy");
weathercodes.set(400, "Light Showers");
weathercodes.set(500, "Heavy Showers");
weathercodes.set(600, "Rain");
weathercodes.set(700, "Snow");
weathercodes.set(800, "Thunder");

const conversions = {
  //WeatherCode conversion
  currentWeather(code) {
    return weathercodes.get(code);
  },
  // Beaufort Conversion
  beaufortConversion(windSpeed) {
    if(windSpeed == 0) {
      return 0;
    }
    else if(windSpeed >= 1 && windSpeed <= 6) {
      return 1;
    }
    else if(windSpeed >= 7 && windSpeed <= 11) {
      return 2;
    }
    else if(windSpeed >=12 && windSpeed <=19) {
      return 3;
    }
    else if(windSpeed >=20 && windSpeed <=29) {
      return 4;
    }
    else if(windSpeed >=30 && windSpeed <=39) {
      return 5;
    }
    else if(windSpeed >=40 && windSpeed <=50) {
      return 6;
    }
    else if(windSpeed >=51 && windSpeed <=62) {
      return 7;
    }
    else if(windSpeed >=63 && windSpeed <=75) {
      return 8;
    }
    else if(windSpeed >=76 && windSpeed <=87) {
      return 9;
    }
    else if(windSpeed >=88 && windSpeed <=102) {
      return 10;
    }
    else if(windSpeed >=103 && windSpeed <=117) {
      return 11;
    }
    else if(windSpeed >= 117) {
      return 12;
    }
  },
  
  // Celsius to Farenheit
  celsiusToFarenheit(temp) {
    return (temp * 1.8) + 32;
  },
  
  // Wind Chill Calculator
  windChill(temp, windSpeed) {
    return (13.12 + 0.6215(temp) - 11.37(windSpeed^0.16) + 0.3965(temp)(windSpeed^0.16));
  },
  
  //Wind Compass Calculator
  windCompass(windDirection) {
    if(windDirection <=348.75  && windDirection >= 11.25) {
       return "North" ;
       }
    else if(windDirection >= 11.26 && windDirection <= 33.75 ) {
        return "North North East" ;    
       }
    else if(windDirection >= 33.76 && windDirection <= 56.25 ) {
        return "North East" ;    
       }
    else if(windDirection >= 56.26 && windDirection <= 78.75) {
        return "East North East" ;    
       }
    else if(windDirection >= 78.76 && windDirection <= 101.25) {
        return "East" ;    
       }
    else if(windDirection >= 101.26 && windDirection <= 123.75) {
        return "East South East" ;    
       }
    else if(windDirection >= 123.76 && windDirection <= 146.25) {
        return "South East" ;    
       }
    else if(windDirection >= 146.26 && windDirection <= 168.75) {
        return "South South East" ;    
       }
    else if(windDirection >= 168.76 && windDirection <= 191.25) {
        return "South" ;    
       }
    else if(windDirection >= 191.26 && windDirection <= 213.75) {
        return "South South West" ;    
       }
    else if(windDirection >= 213.75 && windDirection <= 236.25) {
        return "South West" ;    
       }
    else if(windDirection >= 236.26 && windDirection <= 258.75) {
        return "West South West" ;    
       }
    else if(windDirection >= 258.76 && windDirection <= 281.25) {
        return "West" ;    
       }
    else if(windDirection >= 281.26 && windDirection <= 303.75) {
        return "West North West" ;    
       }
    else if(windDirection >= 303.76 && windDirection <= 326.25) {
        return "North West" ;    
       }
    else if(windDirection >= 326.26 && windDirection <= 348.74) {
        return "North North West" ;    
       }
  }
   
}


module.exports = conversions;