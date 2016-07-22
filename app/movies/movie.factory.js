{
  angular
    .module('movie')
    .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$resource','API_KEY'];

    function movieFactory($resource, API_KEY) {
      var num = 15;
      const API_BASE = `https://api.themoviedb.org/3/movie/${num}?${API_KEY}`;

      console.log('Hello from the factory');
      return $resource(API_BASE);
    }
}

// 'http://api.themoviedb.org/3/search/movie?api_key=dfadb7f7c0b6a5358a9ea7f7ed15fb20&query={{  input  }}'
