{
  angular.module('movie')
    .config(configFunction, configFunction);

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider) {
        $stateProvider
        .state('search', {
          url: '/search',
          templateUrl: 'movies/search/search.html',
          controller: SearchController,

        })
        .state('discover', {
          url: '/discover',
          templateUrl: 'movies/discover/discover.html',
          controller: DiscoverController,
        });
    }

}
