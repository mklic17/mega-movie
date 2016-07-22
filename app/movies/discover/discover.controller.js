{
  angular.module('discover')
    .controller('DiscoverController', DiscoverController);

    DiscoverController.$inject = [];
    function DiscoverController() {
      console.log('In the discover controller');
    }
}
