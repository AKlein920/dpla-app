

var randomArr = ['basketball', 'warhol', 'beatles', 'mlk', 'corn','tucson', 'river', 'telescope', 'protein', 'concrete', 'modern', 'contemporary', 'horror', 'child', 'sleep', 'invent', 'electric', 'arm', 'touch', 'steel', 'titanium', 'knife', 'gun', 'rum', 'doctor', 'hurt', 'duck', 'monk', 'fool', 'funk', 'hip+hop', 'happy', 'sad', 'slum', 'carrot', 'cartoon', 'steam', 'explode', 'cart', 'gang', 'teal', 'bank', 'slime', 'tree', 'petrified', 'mason', 'flame', 'knit', 'shock', 'hero', 'icarus', 'stark', 'curious', 'captivate', 'flag', 'fail', 'dead', 'lizard', 'snake', 'fluffy', 'gentleman', 'toilet', 'bike', 'duomo', 'tobacco', 'coat', 'hour+glass', 'letter+opener', 'globe', 'jar', 'camera', 'chewing+gum', 'ornament', 'stolen', 'enemy', 'saga', 'journey', 'panama', 'technology', 'goat', 'atmosphere', 'jump', 'coral', 'extinct', 'thrift', 'colorful', 'vivid', 'sacred', 'beer', 'mountain', 'drug', 'mosaic', 'graffiti', 'bridge', 'structure', 'challenge', 'impressive', 'race', 'slide', 'jewelry', 'exquisite', 'facet', 'ruby', 'stubborn', 'inspire', 'meal', 'album', 'arctic', 'elite', 'priceless', 'egypt'];


// Results of query: http://api.dp.la/v2/items?q=impressive&sourceResource.type=image&page_size=10&api_key=7c4f10ae79cee82c4372d03dba940c74

// console.log(results.docs);

var imageUrlArray = [];

var randomize = function(randomArr) {
  var result = randomArr[Math.floor(Math.random()*randomArr.length)];
  return result;
}


for (var i = 0; i < results.docs.length; i++) {
  // console.log(results.docs[i].object);
  imageUrlArray.push(results.docs[i].object);
}

var pullFromArray = function() {
  var oneUrl = imageUrlArray[Math.floor(Math.random() * imageUrlArray.length)];
  return oneUrl;
}

console.log(imageUrlArray);
console.log(pullFromArray());
