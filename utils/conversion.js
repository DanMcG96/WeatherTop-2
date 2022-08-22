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

// Beaufort Scale Conversion
const beaufort = {
  beaufortConversion(windSpeed) {
    if(windSpeed == 0) {
      return 0;
    }
    else if(windSpeed >= 1 && windSpeed <= 6) {
      return 1;
    }
    e
  }
}

module.exports = weathercodes, beaufort;