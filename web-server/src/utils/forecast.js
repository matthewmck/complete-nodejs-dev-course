const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/c0a0cf13d701199e30240509380e2afd/${latitude},${longitude}`;

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const temp = body.currently.temperature;
      const rain = body.currently.precipProbability;

      callback(undefined, `It is currently ${temp} degrees out. There is a ${rain}% chance of rain.`);
    }
  })
}

module.exports = forecast;