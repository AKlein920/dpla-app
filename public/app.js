var app = angular.module('dpla-app', []);

var randomArr = ['basketball', 'warhol', 'beatles', 'mlk', 'corn','tucson', 'river', 'telescope', 'protein', 'concrete', 'modern', 'contemporary', 'horror', 'child', 'sleep', 'invent', 'electric', 'arm', 'touch', 'steel', 'titanium', 'knife', 'gun', 'rum', 'doctor', 'hurt', 'duck', 'monk', 'fool', 'funk', 'hip+hop', 'happy', 'sad', 'slum', 'carrot', 'cartoon', 'steam', 'explode', 'cart', 'gang', 'teal', 'bank', 'slime', 'tree', 'petrified', 'mason', 'flame', 'knit', 'shock', 'hero', 'icarus', 'stark', 'curious', 'captivate', 'flag', 'fail', 'dead', 'lizard', 'snake', 'fluffy', 'gentleman', 'toilet', 'bike', 'duomo', 'tobacco', 'coat', 'hour+glass', 'letter+opener', 'globe', 'jar', 'camera', 'chewing+gum', 'ornament', 'stolen', 'enemy', 'saga', 'journey', 'panama', 'technology', 'goat', 'atmosphere', 'jump', 'coral', 'extinct', 'thrift', 'colorful', 'vivid', 'sacred', 'beer', 'mountain', 'drug', 'mosaic', 'graffiti', 'bridge', 'structure', 'challenge', 'impressive', 'race', 'slide', 'jewelry', 'exquisite', 'facet', 'ruby', 'stubborn', 'inspire', 'meal', 'album', 'arctic', 'elite', 'priceless', 'egypt'];

app.controller('BaseController', ['$http', function($http) {
  this.dataGroup = [];
  var controller = this;

  // need a function for randomly generated keyword to begin search

  // function to get data from DPLA api:
  // this.getData = function(searchQuery) {
  //   console.log('getting '+searchQuery+' data');
  //   var controller = this;
  //   var ajaxUrl = 'http://api.dp.la/v2/items?q=' + searchQuery + '&sourceResource.type=image&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74';
  //
  //   $http({
  //     method: 'GET',
  //     url: ajaxUrl
  //   }).then(
  //     function(response) {
  //       // success
  //       console.log(response.data.docs[0].object);
  //       controller.image = response.data.docs[0].object;
  //       console.log(controller.image);
  //       // console.log(controller.test);
  //     },
  //     function(response) {
  //       // failure
  //       console.log(response);
  //     }
  //   )
  // };

  this.getData = function() {
    this.randomize = function(){
      var result = randomArr[Math.floor(Math.random()*randomArr.length)];
      return result;
    }
    $http({
      method: 'GET',
      url: 'http://api.dp.la/v2/items?q=' + this.randomize() + '&sourceResource.type=image&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74'
    }).then(
      function(response) {
        // success
        controller.image = response.data.docs[Math.floor(Math.random()*25)].object;
        console.log(typeof controller.image);
        if(typeof controller.image === 'string'){
          controller.dataGroup.push(controller.image);
          if(controller.dataGroup.length >= 20){
            controller.load = true;
          }
          console.log(controller.dataGroup.length);
          console.log(controller.load);
        } else {
          controller.dataGroup.push(controller.image[0]);
          if(controller.dataGroup.length >= 20){
            controller.load = true;
          }
        };

        // console.log(controller.image);
      },
      function(response) {
        // failure

      }
    )
};

  this.getAllData = function(){
  for(var i = 0; i < 25; i++){
    this.getData();
    if(this.dataGroup.length >= 20){
      this.load = true;
    }
  }
  console.log(this.dataGroup);
  console.log(this.load);
  }


  this.getAllData();
  console.log(this.load);
}]); // end BaseController
