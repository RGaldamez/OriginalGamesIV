angular.module('AngularScaffold.Controllers')
  .controller('gameController', ['$scope', 'gameService', '$sessionStorage', function ($scope, gameService, $sessionStorage) {
    	$scope.title = "Tabla de Juegos."
      $scope.games = [];
      $scope.game = {};

      $scope.GetGames = function(){
        gameService.GetGames().then(function(response){
          $scope.games = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostGame = function(){
        console.log('ke ondas raza');
        gameService.PostGame($scope.game).then(function(response){
          alert("Posted to games");
          $scope.GetGames();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      $scope.DeleteGames = function (params) {
        gameService.DeleteGames(params).then(function (response) {
          alert("R.I.P. games");
          $scope.GetGames();
        }).catch(function(err) {
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      $scope.DeleteGame = function (params) {
        gameService.DeleteGame(params).then(function (params) {
          alert("Game Deleted");
          $scope.GetGames();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      $scope.UpdateGame = function (params) {
        gameService.UpdateGame($scope.game2).then(function (params) {
          alert("Game Modified");
          $scope.GetGames();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }
 

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }
      
      $scope.isRokr = function() {
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('rokr') > -1;
      }

  }]);
