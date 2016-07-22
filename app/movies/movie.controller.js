{
angular
  .module('movie')
  .controller('MovieController', MovieController);

  MovieController.$inject = [];
  function MovieController() {
    console.log('Hello from the controller');

  }
}
