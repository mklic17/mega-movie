{
  angular
    .module('movie')
    .directive('xtMovieForm', xtMovieForm);

    function xtAuthForm() {
      return {
        templateUrl: 'movies/movie.js',
        restrict: 'E',
        controller: 'MovieController',
        // controllerAs: 'vm',


    }

}
