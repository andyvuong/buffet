module.exports = function (app, router) {
  app.use('/api', require('./simple.js')(router));
};