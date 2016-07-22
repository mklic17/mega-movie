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
               var x = someData.results[0];
               console.log(x);
               var title = x.original_title;
               var overview = x.overview;

               console.log(x.genre_ids);
               
               debugger
              //  var genre = x.genre
               var picture = call.concat(x.backdrop_path);
               $scope.title = title;
               $scope.desc = overview;
               var image = x.poster_path;
               $scope.picUrl = call.concat(image);
             })
               console.log('here');

             $scope.searchContent = '';
        }
       }
     }
}
// https://api.themoviedb.org/3/movie/550/images?api_key=dfadb7f7c0b6a5358a9ea7f7ed15fb20&query=en&include_image_language=en,null
// 'http://api.themoviedb.org/3/search/movie?api_key=dfadb7f7c0b6a5358a9ea7f7ed15fb20&query=step%20%brothers'
