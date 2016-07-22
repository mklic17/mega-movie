{
  angular.module('movie')
    .config(configFunction, configFunction);

    configFunction.$inject = ['$stateProvider'];
    function configFunction($stateProvider) {
        $stateProvider
        .state('search', {
          url: '/search',
          templateUrl: 'movies/search/movie-search.html',
          controller: MovieController,

        })
        .state('discover', {
          url: '/discover',
          templateUrl: 'movies/discover/movie-search.html',
          controller: MovieController,
        });
    }

}
