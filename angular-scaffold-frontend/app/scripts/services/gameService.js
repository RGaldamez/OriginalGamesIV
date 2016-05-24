angular.module('AngularScaffold.Services').factory('gameService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		return {
				GetGames: function(){
					return $http.get(baseUrl + "/getGames");
				},
				PostGame: function(payload){
					return $http.post(baseUrl + "/postGame", payload);
				},
                
                UpdateGame: function(payload){
                    return $http.put(baseUrl + '/update',payload);   
                },
                
                DeleteGame: function(payload) {
                    return $http.delete(baseUrl + '/deleteGame/'+payload);
                },
				DeleteGames: function () {
					return $http.delete(baseUrl + '/deleteGames');	
				}
	    };
}]);
