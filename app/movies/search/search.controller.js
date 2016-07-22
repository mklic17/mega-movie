{
  angular.module('search')
    .controller('SearchController', SearchController);

    SearchController.$inject = [];

    function SearchController() {
       console.log('In the search Controller');

    }
}
