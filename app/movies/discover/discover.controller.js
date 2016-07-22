{
  angular.module('discover')
    .controller('DiscoverController', DiscoverController);

    DiscoverController.$inject = ['$scope', '$resource', 'API_KEY'];
    function DiscoverController($scope, $resource, API_KEY) {
      console.log('In the discover controller');

      const URL = `http://api.themoviedb.org/3/discover/movie?${API_KEY}`;
      $resource(URL).get().$promise.then(
        things => {
            console.log(things);
            var movieArray = things.results;
            var title = things.results[0].title;
            $scope.multipleMovie = things;
        });
    }
}
