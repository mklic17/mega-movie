{
  angular.module('search')
    .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope', 'movieFactory', 'API_KEY'];

    function SearchController($scope, movieFactory, API_KEY) {
       console.log('In the search Controller');

       $scope.searchController = function() {
         if ($scope.searchContent){
           movieFactory.get()
           $scope.searchContent = '';
         }
       }
    }
}
