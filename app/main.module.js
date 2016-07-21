{
  angular.module('mainModule', [
    'ui.router',
    'ngResource',
    'movie'
    ])
    .config(configFunction);



    configFunction.$inject=['$urlRouterProvider'];

    function configFunction($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }

}
