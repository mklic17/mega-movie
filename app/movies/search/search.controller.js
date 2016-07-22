{
  angular.module('search')
    .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope','API_KEY', '$resource'];

    function SearchController($scope, API_KEY, $resource) {
       console.log('In the search Controller');

       $scope.findMovie = function() {
         console.log('sucessfully called the findMovie function')
         if ($scope.searchContent){
           var input = $scope.searchContent;
           var call = `http://api.themoviedb.org/3/search/movie?${API_KEY}&query=${input}`;
           console.log(input);
           console.log(call);
           $resource(call).get().$promise.then(
             someData => {
               debugger;
               var x = someData.results[0];
               debugger;
               var title = x.original_title;
               var overview = x.overview;
               var picture = call.concat(x.backdrop_path);
               debugger;
               $scope.title = title;
               $scope.desc = overview;
             })
               console.log('here');

             $scope.searchContent = '';
        }
       }
     }
}

// 'http://api.themoviedb.org/3/search/movie?api_key=dfadb7f7c0b6a5358a9ea7f7ed15fb20&query=step%20%brothers'
