(function() {
  var app = angular.module('megaMovie', [
    'ui.router'
  ]);

  function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/movies');

    $stateProvider

      .state('movies', {
        url: '/movies',
        template: '<h1>Mega Movie</h1><p>{{ message }}</p>',
        controller: function($scope) {
          $scope.message = "Welcome to Mega Movie!";
        }
      });
  }

  config['$inject'] = ['$stateProvider', '$urlRouterProvider'];
  app.config(config);
})();
