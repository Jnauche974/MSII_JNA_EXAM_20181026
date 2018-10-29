'use strict';
var mqtt = require('mqtt');

module.exports = function(app, next) {
  var client = mqtt.connect('mqtt://localhost:1883');

  client.on('connect', function() {
    console.log('Backend connected to the broker mqtt');
    app.mqttClient = client;

    next();
  });
};
