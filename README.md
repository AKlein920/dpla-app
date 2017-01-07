# dpla-app

Initial color palette: http://wagnermediaworks.com/wp-content/uploads/2017/01/canoe-color-palette-with-pic.png

<<<<<<< Updated upstream

Query for Art Images that will return 25 images:
http://api.dp.la/v2/items?q=art&sourceResource.type=image&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74
“object” property is direct link to image

Query for Art Images from after the year 2010
http://api.dp.la/v2/items?q=art&sourceResource.type=image&sourceResource.date.after=2010&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74

Randomizer: use an array of random items to generate search terms, but also generate a random number to select one of the results between 1 and 25 (or any number of results that we’ve set)

<!-- Fixed array so that quotes around strings show/function properly: -->
var randomArr = ['basketball', 'warhol', 'beatles', 'mlk', 'corn','tucson', 'river', 'telescope', 'protein', 'concrete', 'modern', 'contemporary', 'horror', 'child', 'sleep', 'invent', 'electric', 'arm', 'touch', 'steel', 'titanium', 'knife', 'gun', 'rum', 'doctor', 'hurt', 'duck', 'monk', 'fool', 'funk', 'hip+hop', 'happy', 'sad', 'slum', 'carrot', 'cartoon', 'steam', 'explode', 'cart', 'gang', 'teal', 'bank', 'slime', 'tree', 'petrified', 'mason', 'flame', 'knit', 'shock', 'hero', 'icarus', 'stark', 'curious', 'captivate', 'flag', 'fail', 'dead', 'lizard', 'snake', 'fluffy', 'gentleman', 'toilet', 'bike', 'duomo', 'tobacco', 'coat', 'hour+glass', 'letter+opener', 'globe', 'jar', 'camera', 'chewing+gum', 'ornament', 'stolen', 'enemy', 'saga', 'journey', 'panama', 'technology', 'goat', 'atmosphere', 'jump', 'coral', 'extinct', 'thrift', 'colorful', 'vivid', 'sacred', 'beer', 'mountain', 'drug', 'mosaic', 'graffiti', 'bridge', 'structure', 'challenge', 'impressive', 'race', 'slide', 'jewelry', 'exquisite', 'facet', 'ruby', 'stubborn', 'inspire', 'meal', 'album', 'arctic', 'elite', 'priceless', 'egypt'];
=======
Logo Possiblities: 
http://wagnermediaworks.com/wp-content/uploads/2017/01/Endeavor-Lion-1.png

http://wagnermediaworks.com/wp-content/uploads/2017/01/endeavor-Mountain-1.png

http://wagnermediaworks.com/wp-content/uploads/2017/01/endeavor-logo-text-only-1.png
>>>>>>> Stashed changes
