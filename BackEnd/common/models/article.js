'use strict';

module.exports = function(Article) {
  // Order after save..
  Article.observe('after save', function(ctx, next) {
    var mqttClient = Article.app.mqttClient;
    var message = ctx.instance;
    mqttClient.publish(`Article/${message.Nom}`, JSON.stringify(message));
    // Calling the next middleware..
    next();
  }); // after save..
};
