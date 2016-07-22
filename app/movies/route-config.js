{
  angular.module('movie')
    .config(configFunction, configFunction);

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider) {
        $stateProvider
        .state('search', {
          url: '/search',
          templateUrl: 'movies/movie-search.html',
          controller: MovieSearchController,
          // controllerAs: 'vm',

        })
        .state('discover', {
          url: '/discover',
          templateUrl: 'movies/movie-search.html',
          controller: MovieDiscoverController,
        });
    }

}
