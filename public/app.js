var app = angular.module('dpla-app', []);

app.controller('BaseController', ['$http', function($http) {

  var controller = this;

  // need a function for randomly generated keyword to begin search

  // function to get data from DPLA api:
  this.getData = function(searchQuery) {
    console.log('getting '+searchQuery+' data');
    var controller = this;
    var ajaxUrl = 'http://api.dp.la/v2/items?q=' + searchQuery + '&sourceResource.type=image&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74';

    $http({
      method: 'GET',
      url: ajaxUrl
    }).then(
      function(response) {
        // success
        console.log(response.data.docs[0].object);
        controller.image = response.data.docs[0].object;
        console.log(controller.image);
        // console.log(controller.test);
      },
      function(response) {
        // failure
        console.log(response);
      }
    )
};

}]); // end BaseController
