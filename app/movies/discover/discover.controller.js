{
  angular.module('discover')
    .controller('DiscoverController', DiscoverController);

    DiscoverController.$inject = ['$scope', '$resource', 'API_KEY'];
    function DiscoverController($scope, $resource, API_KEY) {
      console.log('In the discover controller');



      var url = `http://api.themoviedb.org/3/discover/movie?${API_KEY}`;
      // var url = `http://api.themoviedb.org/3/discover/movie?${API_KEY}&sort_by%20release_date.desc`;
      $resource(url).get().$promise.then(
        things => {
            var x = things.results;
            $scope.movieArray = x;
        });



    }
}
