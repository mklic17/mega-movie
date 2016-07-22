{
  angular.module('search')
    .controller('MovieSearchController', MovieSearchController);

    MovieSearchController.$inject = [];

    function MovieSearchController() {
      console.log('made it to search controller');
    }

}
