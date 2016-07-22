{
  angular.module('mainModule', [
    'ui.router',
    'ngResource',
    'movie',
    'search',
    'discover',
    ])
    .config(configFunction);



    configFunction.$inject=['$urlRouterProvider'];

    function configFunction($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }

}
