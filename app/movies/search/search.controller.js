{
  angular.module('search')
    .controller('SearchController', SearchController);

    SearchController.$inject = ['$scope','API_KEY', '$resource', 'IMAGE_URL'];

    function SearchController($scope, API_KEY, $resource, IMAGE_URL) {
       console.log('In the search Controller');

       $scope.findMovie = function() {
         console.log('sucessfully called the findMovie function')
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
               debugger;
               var shortcut = x.poster_path;
               var picture = `${IMAGE_URL}${shortcut}`;
               console.log(picture);
               $scope.picUrl = picture;

             })

             $scope.searchContent = '';
        }
       }
     }
}
// https://api.themoviedb.org/3/movie/550/images?api_key=dfadb7f7c0b6a5358a9ea7f7ed15fb20&query=en&include_image_language=en,null
// 'http://api.themoviedb.org/3/search/movie?api_key=dfadb7f7c0b6a5358a9ea7f7ed15fb20&query=step%20%brothers'
