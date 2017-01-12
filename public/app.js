var app = angular.module('dpla-app', []);

var randomArr = ['kitten', 'cute', 'puppy', 'basketball', 'warhol', 'beatles', 'mlk', 'corn','tucson', 'river', 'telescope', 'protein', 'concrete', 'modern', 'contemporary', 'horror', 'child', 'sleep', 'invent', 'electric', 'arm', 'touch', 'steel', 'titanium', 'knife', 'gun', 'rum', 'doctor', 'hurt', 'duck', 'monk', 'fool', 'funk', 'hip+hop', 'happy', 'sad', 'slum', 'carrot', 'cartoon', 'steam', 'explode', 'cart', 'gang', 'teal', 'bank', 'slime', 'tree', 'petrified', 'mason', 'flame', 'knit', 'shock', 'hero', 'icarus', 'stark', 'curious', 'captivate', 'flag', 'fail', 'dead', 'lizard', 'snake', 'fluffy', 'gentleman', 'toilet', 'bike', 'duomo', 'tobacco', 'coat', 'hour+glass', 'letter+opener', 'globe', 'jar', 'camera', 'chewing+gum', 'ornament', 'stolen', 'enemy', 'saga', 'journey', 'panama', 'technology', 'goat', 'atmosphere', 'jump', 'coral', 'extinct', 'thrift', 'colorful', 'vivid', 'sacred', 'beer', 'mountain', 'drug', 'mosaic', 'graffiti', 'bridge', 'structure', 'challenge', 'impressive', 'race', 'slide', 'jewelry', 'exquisite', 'facet', 'ruby', 'stubborn', 'inspire', 'meal', 'album', 'arctic', 'elite', 'priceless', 'egypt', 'jungle', 'safari', 'sherd', 'virgin islands', 'west indies', 'trade cards', 'castle', 'habit', 'circus'];


app.controller('BaseController', ['$http', function($http) {
  this.imageGroup = []; //Array of image URLs
  this.dataGroup = []; //Array of items containing all associated json data
  var controller = this;
  this.queryGroup = [];
  this.userName = "User Name";
  this.userPassword = "Password";
  this.loggedIn = false;
  this.userNow = null;
  this.explore = false;


// Function to get single item from random search query
  this.getData = function() {
    // pull one random value from the random array of terms:
    this.randomize = function(){
      var result = randomArr[Math.floor(Math.random()*randomArr.length)];
      return result;
    }
    // store result of randomizer function in a variable:
    this.random = this.randomize();
    // push random result into queryGroup array:
    this.queryGroup.push(this.random);
    // use the random result in an api call to dpla database to get images:
    $http({
      method: 'GET',
      url: 'https://api.dp.la/v2/items?q=' + this.random + '&sourceResource.type=image&page_size=100&api_key=7c4f10ae79cee82c4372d03dba940c74'
    }).then(
      function(response) { // success
        // store a randomly pulled object from the response data in a variable:
        controller.item = response.data.docs[Math.floor(Math.random()*100)];
        // if the randomly pulled object is undefined,
        if (controller.item === undefined) {
          // pull another randomly pulled object:
          controller.item = response.data.docs[Math.floor(Math.random()*100)];
          // if the object exists but the object property is undefined,
        } else if (controller.item.object === undefined) {
          // pull another randomly pulled object:
          controller.item = response.data.docs[Math.floor(Math.random()*100)];
          // if the object's 'object' property exists (image URL),
        } else if (controller.item.object) {
          // set it to a variable:
          controller.image = controller.item.object;
          // if the object's object property is an array:
        } else if (controller.item.object.length > 1) {
          // store the FIRST value (image URL) in a variable:
          controller.image = controller.item.object[0]
        };
        // push the randomly pulled object into an array dataGroup:
        controller.dataGroup.push(controller.item);
        // load is TRUE if the length of dataGroup array is greater than or equal to 20:
        if(controller.dataGroup.length >= 20){
          controller.load = true;
        };
        controller.explore = false;
      },
      function(response) { // failure
      }
    )
};

//Function to get a single item similar to clicked item
  this.getSimilar = function(index){
    // set load to FALSE:
    this.load = false;
    // store ONE value (random result from the randomArr), marked by its index, from the queryGroup array in a variable:
    this.query = this.queryGroup[index];
    console.log(index);
    console.log(this.queryGroup);
    // api call using the ONE value to get associated images from dpla:
    $http({
      method: 'GET',
      url: 'https://api.dp.la/v2/items?q=' + this.query + '&sourceResource.type=image&page_size=100&api_key=7c4f10ae79cee82c4372d03dba940c74'
    }).then(
      function(response) { // success
        // store a randomly pulled object from the response data in a variable:
        controller.similarItem = response.data.docs[Math.floor(Math.random()*100)];
        // store the randomly pulled object's image URL in a variable:
        controller.similarImage = controller.similarItem.object;
        // push the randomly pulled object into dataGroup array:
        controller.dataGroup.push(controller.similarItem);
        // load is TRUE if the length of dataGroup array is greater than or equal to 20:
        if(controller.dataGroup.length >= 20){
          controller.load = true;
        };
        controller.explore = true;
      },
      function(response) { // failure
      }
    )
  };


//Function to get multiple items from different search queries
  this.getAllData = function(){
    this.dataGroup = [];
    this.queryGroup = [];
    // run a for loop 20 times:
    for(var i = 0; i < 20; i++){
      // run the getData function 20 times:
      this.getData();
      // check length of dataGroup array; if >= 20, load is TRUE:
      if(this.dataGroup.length >= 20){
      this.load = true;
    }
  }

  console.log(this.dataGroup);
  console.log(this.load);
  console.log('Query Group '+ this.queryGroup)
};

// Function to get multiple items similar to clicked item:
  this.getAllSimilar = function(index){
    // clear existing data from dataGroup array:
    this.dataGroup = [];
    // remove existing images from DOM:
    this.load = false;
    // run a for loop 20 times:
    for(var i = 0; i < 20; i++){
      // run the getSimilar function 20 times:
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

  //Function to get a user's favorites
      this.getFavorites = function(index){
        // set load to FALSE:
        this.load = false;
        this.dataGroup = [];
        $http({
          method: 'GET',
          url: '/users/showfavorites'
        }).then(
          function(response) { // success
            console.log('app.js');
            console.log(response.data.favoritesArray[0].object);
            for(var i = 0; i < response.data.favoritesArray.length; i++){
              controller.dataGroup.push(response.data.favoritesArray[i]);
            };
            console.log(controller.dataGroup);
            if(controller.dataGroup.length === response.data.favoritesArray.length){
              controller.load = true;
            }
            console.log(controller.load);

          },
          function(response) { // failure
          }
        )
      };


//Function to add favorite to user collection
  this.addFav = function(index){
    $http({
      method: 'PUT',
      url: '/users/favorites',
      data: {
        item: this.dataGroup[index]
      }
    }).then(
      function(response){
        console.log('Posting Item');
        console.log(response);
      },
      function(response){//fail
        console.log('failed to add fav');
        console.log(response);
      }
    )
  };

//Function to Log In
  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.userName,
        password: this.userPassword,
      }
    }).then(
      function(response){
        console.log('logging in');
        console.log(response.config.data.username);
        controller.userName = null;
        controller.userPassword = null;
        controller.loggedIn = true;
        controller.userNow = response.config.data.username;

      },
      function(response){

      }
    )
  }

//Function to Sign Out
  this.logOut = function(){
    $http({
      method: 'DELETE',
      url: '/sessions'
    }).then(
      function(response){
        console.log('logged out');
        controller.loggedIn = false;
      },
      function(response){
        console.log('failed to log out');
      }
    )
  }

//Function to Add User
  this.addUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        userName: this.userName,
        userPassword: this.userPassword,
      }
    }).then(
      function(response){
        console.log('creating user');
        console.log(response);
        controller.userName = null;
        controller.userPassword = null;
      },
      function(response){

      }
    )
  }

  this.getAllData();
  console.log(this.load);
  console.log(this.dataGroup);
}]); // end BaseController
