var gamesController = require('./controllers/gamesController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [
	//{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Games')}}},
	{method: 'GET', path: '/getGames', config: gamesController.getGames},
	{method: 'GET', path: '/getGame/{isbn}', config: gamesController.getGame},
  {method: 'POST', path: '/postGame', config: gamesController.createGame},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'DELETE', path: '/deleteGame/{isbn}', config: gamesController.deleteGame},
	{method: 'POST', path: '/postGame2', config: gamesController.postGame2},
	{method: 'PUT', path: '/update', config: gamesController.update},
	{method: 'DELETE', path: '/deleteGames', config: gamesController.deleteGames},
];
