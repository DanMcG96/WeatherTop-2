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
  windChill(temp, windSpeed) {
    return (13.12 + 0.6215(temp) - 11.37(windSpeed^0.16) + 0.3965(temp)(windSpeed^0.16));
  }
   
}


module.exports = conversions;