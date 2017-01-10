var app = angular.module('dpla-app', []);

var randomArr = ['basketball', 'warhol', 'beatles', 'mlk', 'corn','tucson', 'river', 'telescope', 'protein', 'concrete', 'modern', 'contemporary', 'horror', 'child', 'sleep', 'invent', 'electric', 'arm', 'touch', 'steel', 'titanium', 'knife', 'gun', 'rum', 'doctor', 'hurt', 'duck', 'monk', 'fool', 'funk', 'hip+hop', 'happy', 'sad', 'slum', 'carrot', 'cartoon', 'steam', 'explode', 'cart', 'gang', 'teal', 'bank', 'slime', 'tree', 'petrified', 'mason', 'flame', 'knit', 'shock', 'hero', 'icarus', 'stark', 'curious', 'captivate', 'flag', 'fail', 'dead', 'lizard', 'snake', 'fluffy', 'gentleman', 'toilet', 'bike', 'duomo', 'tobacco', 'coat', 'hour+glass', 'letter+opener', 'globe', 'jar', 'camera', 'chewing+gum', 'ornament', 'stolen', 'enemy', 'saga', 'journey', 'panama', 'technology', 'goat', 'atmosphere', 'jump', 'coral', 'extinct', 'thrift', 'colorful', 'vivid', 'sacred', 'beer', 'mountain', 'drug', 'mosaic', 'graffiti', 'bridge', 'structure', 'challenge', 'impressive', 'race', 'slide', 'jewelry', 'exquisite', 'facet', 'ruby', 'stubborn', 'inspire', 'meal', 'album', 'arctic', 'elite', 'priceless', 'egypt'];

app.controller('BaseController', ['$http', function($http) {
  this.imageGroup = []; //Array of image URLs
  this.dataGroup = []; //Array of items containing all associated json data
  var controller = this;
  this.queryGroup = [];

// need a function for randomly generated keyword to begin search

// Function to get single item from random search qurey
  this.getData = function() {
    this.randomize = function(){
      var result = randomArr[Math.floor(Math.random()*randomArr.length)];
      return result;
    }
    this.random = this.randomize()
    this.queryGroup.push(this.random);
    $http({
      method: 'GET',
      url: 'http://api.dp.la/v2/items?q=' + this.random + '&sourceResource.type=image&page_size=100&api_key=7c4f10ae79cee82c4372d03dba940c74'
    }).then(
      function(response) {
        // success
        controller.item = response.data.docs[Math.floor(Math.random()*100)];
        controller.image = controller.item.object;
        controller.dataGroup.push(controller.item);
        if(controller.dataGroup.length >= 20){
          controller.load = true;
        }
      },
      function(response) {
        // failure

      }
    )
};

//Function to get a single item similar to clicked item
  this.getSimilar = function(index){
    this.load = false;
    this.query = this.queryGroup[index];
    $http({
      method: 'GET',
      url: 'http://api.dp.la/v2/items?q=' + this.query + '&sourceResource.type=image&page_size=100&api_key=7c4f10ae79cee82c4372d03dba940c74'
    }).then(
      function(response) {
        // success
        controller.similarItem = response.data.docs[Math.floor(Math.random()*100)];
        controller.similarImage = controller.similarItem.object;
        controller.dataGroup.push(controller.similarItem);
        if(controller.dataGroup.length >= 20){
          controller.load = true;
        }
      },
      function(response) {
        // failure

      }
    )
  }


//Function to get multiple items from different search queries
  this.getAllData = function(){
  for(var i = 0; i < 20; i++){
    this.getData();
    if(this.dataGroup.length >= 20){
      this.load = true;
    }
  }
  console.log(this.dataGroup);
  console.log(this.load);
  console.log('Query Group '+ this.queryGroup)
  }

//Function to get multiple iItems similar to clicked item
  this.getAllSimilar = function(index){
    this.dataGroup = []; //clear existing data from array
    this.load = false; //remove existing images from DOM
    for(var i = 0; i < 20; i++){
      this.getSimilar(index);
      if(this.dataGroup.length >= 20){
        this.load = true;
      }
    }
    console.log(this.dataGroup);
    console.log(this.load);
  };

//Function to account for the fact that the title could be stored in two different places
  this.titlePath = function(item){
    if(item.admin === undefined){
      return item.sourceResource.title[0];
    } else {
      return item.admin.sourceResource.title;
    }
  };

//Function to identify the clicked item by index in the ng-repeat
  this.selector = function(index){
    this.selected = index;
    console.log(this.dataGroup[this.selected].admin.sourceResource.title);
  }

//Function to account for the fact that there object could be a string or an array
  this.showImage = function(item){
    if(typeof item.object === 'string'){
      return item.object;
    } else {
      return item.object[0];
    }
  }

  this.getAllData();
  console.log(this.load);
  console.log(this.dataGroup);
}]); // end BaseController
