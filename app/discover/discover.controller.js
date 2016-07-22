{
  angular.module('discover')
    .controller('MovieDiscoverController', MovieDiscoverController);

    MovieDiscoverController.$inject = [];
    function MovieDiscoverController() {
      console.log('made it to Discover Controller');
    }
}
