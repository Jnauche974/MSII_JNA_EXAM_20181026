'use strict';

module.exports = function(Comment) {
  // Order after save..
  Comment.observe('after save', function(ctx, next) {
    var mqttClient = Comment.app.mqttClient;
    var message = ctx.instance;
    mqttClient.publish(`Comment/${message.Nom}`, JSON.stringify(message));
    // Calling the next middleware..
    next();
  }); // after save..
};
