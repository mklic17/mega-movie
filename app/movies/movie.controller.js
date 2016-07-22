{
angular
  .module('movie')
  .controller('MovieController', MovieController);

  MovieController.$inject = ['$scope', 'movieFactory'];
  function MovieController($scope, movieFactory) {
    console.log('Hello from the controller');
    movieFactory.get().$promise.then(
      movieData => {
        console.log(movieData);
      });
  }
}
