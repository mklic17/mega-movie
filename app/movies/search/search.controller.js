{
  angular.module('search')
    .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope','API_KEY', '$resource'];

    function SearchController($scope, API_KEY, $resource) {
       console.log('In the search Controller');

       $scope.findMovie = function() {
         if ($scope.searchContent){
           var input = $scope.searchContent;
           const call = `http://api.themoviedb.org/3/search/movie?${API_KEY}&query=${input}`;
           $resource(call).get().$promise.then(
             someData => {
               var x = someData.results[0];

               var title = x.original_title;
               $scope.title = title;
               var overview = x.overview;
               $scope.desc = overview;
               var shortcut = x.poster_path;
               console.log(shortcut);
               $scope.picture = shortcut;
             });

        }
        else {
          console.log('please fill out the form');
        }
       }
     }
}
