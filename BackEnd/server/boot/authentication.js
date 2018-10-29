'use strict';

module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();

  // L'authenfication ne fonnctionne pas, il ne reconnait pas user
  // app.post('/login', function(req, res) {
  //   User.login({
  //     email: req.body.email,
  //     password: req.body.password
  //   }, 'user', function(err, token) {
  //     if (err) {
  //       res.render('response', { //render view named 'response.ejs'
  //         title: 'Login failed',
  //         content: err,
  //         redirectTo: '/',
  //         redirectToLinkText: 'Try again'
  //       });
  //       return;
  //     }

  //     res.render('home', { //login user and render 'home' view
  //       email: req.body.email,
  //       accessToken: token.id
  //     });
  //   });
  // });
};
