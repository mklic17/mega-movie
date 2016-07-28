{
  angular.module('discover')
    .controller('DiscoverController', DiscoverController);

    DiscoverController.$inject = ['$scope', '$resource', 'API_KEY'];
    function DiscoverController($scope, $resource, API_KEY) {
      console.log('In the discover controller');
      $scope.method = method;


      function method(num) {
        var url = '';
        if (num == 1) {
          var url = `http://api.themoviedb.org/3/movie/popular?${API_KEY}`;
          console.log('popular');
          console.log(url);
        }
        else {
          var url = `http://api.themoviedb.org/3/discover/movie?${API_KEY}&sort_by%20release_date.desc`;
          console.log('recent');
          console.log(url);
        }
        $resource(url).get().$promise.then(
          things => {
              var x = things.results;
              $scope.movieArray = x;
          });
      }
    }
}
