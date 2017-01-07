

var randomArr = ['basketball', 'warhol', 'beatles', 'mlk', 'corn','tucson', 'river', 'telescope', 'protein', 'concrete', 'modern', 'contemporary', 'horror', 'child', 'sleep', 'invent', 'electric', 'arm', 'touch', 'steel', 'titanium', 'knife', 'gun', 'rum', 'doctor', 'hurt', 'duck', 'monk', 'fool', 'funk', 'hip+hop', 'happy', 'sad', 'slum', 'carrot', 'cartoon', 'steam', 'explode', 'cart', 'gang', 'teal', 'bank', 'slime', 'tree', 'petrified', 'mason', 'flame', 'knit', 'shock', 'hero', 'icarus', 'stark', 'curious', 'captivate', 'flag', 'fail', 'dead', 'lizard', 'snake', 'fluffy', 'gentleman', 'toilet', 'bike', 'duomo', 'tobacco', 'coat', 'hour+glass', 'letter+opener', 'globe', 'jar', 'camera', 'chewing+gum', 'ornament', 'stolen', 'enemy', 'saga', 'journey', 'panama', 'technology', 'goat', 'atmosphere', 'jump', 'coral', 'extinct', 'thrift', 'colorful', 'vivid', 'sacred', 'beer', 'mountain', 'drug', 'mosaic', 'graffiti', 'bridge', 'structure', 'challenge', 'impressive', 'race', 'slide', 'jewelry', 'exquisite', 'facet', 'ruby', 'stubborn', 'inspire', 'meal', 'album', 'arctic', 'elite', 'priceless', 'egypt'];

var randomize = function(randomArr) {
  var result = randomArr[Math.floor(Math.random()*randomArr.length)];
  return result;
}

// console.log(randomize(randomArr));


// Results of query: http://api.dp.la/v2/items?q=impressive&sourceResource.type=image&page_size=2&api_key=7c4f10ae79cee82c4372d03dba940c74

console.log(results.docs);

var results = {
   "count":2856,
   "start":0,
   "limit":2,
   "docs":[
      {
         "ingestType":"item",
         "ingestionSequence":999999,
         "ingestDate":"2016-10-03",
         "@context":"http://dp.la/api/items/context",
         "aggregatedCHO":"#sourceResource",
         "@id":"http://dp.la/api/items/206e1b4a9d17ddc3ed748568c341b4c0",
         "id":"206e1b4a9d17ddc3ed748568c341b4c0",
         "dataProvider":"Los Angeles Public Library",
         "originalRecord":"http://ldp.dp.la/ldp/original_record/206e1b4a9d17ddc3ed748568c341b4c0.json",
         "sourceResource":{
            "@id":"http://dp.la/api/items/206e1b4a9d17ddc3ed748568c341b4c0#sourceResource",
            "creator":[
               "Martin, Bob"
            ],
            "description":[
               "Made accessible through a grant from the John Randolph Haynes and Dora Haynes Foundation and Photo Friends.",
               "Photograph caption dated April 27, 1965 reads, \"Students and visitors to Mt. Gleason Junior High School, Sunland, during tomorrow night's open house will have a chance to view at close range this model of the Air Force Titan III Rocket, lent the school by Norton Air Force Base, Calif. Viewing 5:1 scale model are, from left, Bruce J. Whitaker, boys' advisor and coordinator of Public Schools Week event, and students Charles Lamm, 12, and Greg Little, 13. Open house begins at 6:30.",
               "LAPL 00108960"
            ],
            "format":[
               "Nonprojected graphic"
            ],
            "identifier":[
               "(OCoLC)864203302"
            ],
            "language":[
               {
                  "name":"English"
               }
            ],
            "rights":"copyright unknown",
            "title":[
               "Impressive"
            ],
            "collection":[
               {
                  "title":[
                     "Los Angeles Public Library Photo Collection"
                  ],
                  "@id":"_:15774304ace1fb",
                  "id":"_:15774304ace1fb"
               }
            ],
            "type":"image",
            "date":[
               {
                  "displayDate":"1965",
                  "begin":"1965-01-01",
                  "end":"1965-12-31"
               }
            ],
            "spatial":[
               {
                  "name":"Sunland (Los Angeles, Calif.)",
                  "coordinates":"34.26695, -118.3023"
               },
               {
                  "name":"Norton Air Force Base (Calif.)",
                  "coordinates":"34.1, -117.23611"
               }
            ],
            "subject":[
               {
                  "name":"United States.. Air Force"
               },
               {
                  "name":"X-20 (Space glider)"
               },
               {
                  "name":"Ballistic missiles"
               },
               {
                  "name":"Titan (Missile)"
               },
               {
                  "name":"Fourth of July"
               },
               {
                  "name":"Sunland (Los Angeles, Calif.)"
               },
               {
                  "name":"Norton Air Force Base (Calif.)"
               },
               {
                  "name":"Valley Times Collection photographs"
               }
            ]
         },
         "provider":{
            "name":"California Digital Library",
            "@id":"http://dp.la/api/contributor/cdl"
         },
         "isShownAt":"http://photos.lapl.org/carlweb/jsp/DoSearch?index=z\u0026databaseID=968\u0026terms=0005229086",
         "object":"https://thumbnails.calisphere.org/clip/150x150/c61e3c32ecb3f1dd1aac206ce5a4efff",
         "_id":"206e1b4a9d17ddc3ed748568c341b4c0",
         "score":12.650437
      },
      {
         "@context":"http://dp.la/api/items/context",
         "isShownAt":"https://texashistory.unt.edu/ark:/67531/metadc504838/",
         "dataProvider":[
            "UNT Archives"
         ],
         "@type":"ore:Aggregation",
         "provider":{
            "@id":"http://dp.la/api/contributor/the_portal_to_texas_history",
            "name":"The Portal to Texas History"
         },
         "object":"https://texashistory.unt.edu/ark:/67531/metadc504838/thumbnail/",
         "ingestionSequence":23,
         "ingestDate":"2016-11-01T04:46:34.011953Z",
         "_rev":"9-1c6453dfc2f8b73464199542faa0923e",
         "id":"817fcbfea0136e830e07b2c323145e38",
         "aggregatedCHO":"#sourceResource",
         "_id":"texas--info:ark/67531/metadc504838",
         "admin":{
            "validation_message":null,
            "sourceResource":{
               "title":"[Impressive]"
            },
            "valid_after_enrich":true
         },
         "sourceResource":{
            "title":[
               "[Impressive]"
            ],
            "spatial":[
               {
                  "name":"United States - Texas",
                  "state":"Texas",
                  "coordinates":"31.25044, -99.25061",
                  "country":"United States"
               }
            ],
            "description":[
               "A photograph of Tommy Manion's horse, Impressive standing in a grassy field with a brown fence visible in the background.",
               "1 photograph : negative, col. ; 6 x 6 cm."
            ],
            "subject":[
               {
                  "name":"Cutting horses--Photographs"
               },
               {
                  "name":"Agriculture"
               },
               {
                  "name":"Domestic Animals"
               },
               {
                  "name":"Impressive"
               },
               {
                  "name":"Sports and Recreation"
               },
               {
                  "name":"Riding"
               },
               {
                  "name":"Horses"
               },
               {
                  "name":"Social Life and Customs"
               },
               {
                  "name":"Clubs and Organizations"
               },
               {
                  "name":"National Cutting Horse Association"
               },
               {
                  "name":"NCHA"
               },
               {
                  "name":"Show horses"
               }
            ],
            "rights":"The contents of The Portal to Texas History (digital content including images, text, and sound and video recordings) are made publicly available by the collection-holding partners for use in research, teaching, and private study. For the full terms of use, see https://texashistory.unt.edu/terms-of-use/",
            "format":"Image",
            "@id":"http://dp.la/api/items/817fcbfea0136e830e07b2c323145e38#sourceResource",
            "collection":{
               "id":"bb44b3528e26a38e6ec12900e893fc42",
               "description":"",
               "title":"UNT Libraries Special Collections",
               "@id":"http://dp.la/api/collections/bb44b3528e26a38e6ec12900e893fc42"
            },
            "date":{
               "displayDate":"1982-06",
               "end":"1982-06",
               "begin":"1982-06"
            },
            "type":"image",
            "identifier":[
               "itemURL: https://texashistory.unt.edu/ark:/67531/metadc504838/",
               "LOCAL-CONT-NO: UNTA_AR004-19-165-09",
               "thumbnailURL: https://texashistory.unt.edu/ark:/67531/metadc504838/thumbnail/",
               "ARK: ark:/67531/metadc504838"
            ],
            "creator":[
               "Shugart, Don"
            ]
         },
         "@id":"http://dp.la/api/items/817fcbfea0136e830e07b2c323145e38",
         "ingestType":"item",
         "originalRecord":{
            "id":"info:ark/67531/metadc504838",
            "provider":{
               "@id":"http://dp.la/api/contributor/the_portal_to_texas_history",
               "name":"The Portal to Texas History"
            },
            "collection":{
               "id":"bb44b3528e26a38e6ec12900e893fc42",
               "description":"",
               "title":"UNT Libraries Special Collections",
               "@id":"http://dp.la/api/collections/bb44b3528e26a38e6ec12900e893fc42"
            },
            "header":{
               "identifier":"info:ark/67531/metadc504838",
               "setSpec":[
                  "partner:UNTA",
                  "collection:HCUSA",
                  "collection:DONSP",
                  "collection:CHPC",
                  "access_rights:public"
               ],
               "datestamp":"2015-06-23T13:33:54Z"
            },
            "metadata":{
               "untl:metadata":{
                  "untl:rights":{
                     "#text":"The contents of The Portal to Texas History (digital content including images, text, and sound and video recordings) are made publicly available by the collection-holding partners for use in research, teaching, and private study. For the full terms of use, see https://texashistory.unt.edu/terms-of-use/",
                     "qualifier":"statement"
                  },
                  "untl:resourceType":"image_photo",
                  "untl:title":{
                     "#text":"[Impressive]",
                     "qualifier":"officialtitle"
                  },
                  "untl:institution":"UNTA",
                  "untl:primarySource":"1",
                  "untl:coverage":[
                     {
                        "qualifier":"placeName",
                        "#text":"United States - Texas"
                     },
                     {
                        "qualifier":"date",
                        "#text":"1982-06"
                     },
                     {
                        "qualifier":"timePeriod",
                        "#text":"mod-tim"
                     }
                  ],
                  "untl:date":{
                     "#text":"1982-06",
                     "qualifier":"creation"
                  },
                  "untl:creator":{
                     "untl:name":"Shugart, Don",
                     "qualifier":"pht",
                     "untl:type":"per"
                  },
                  "untl:collection":[
                     "HCUSA",
                     "DONSP",
                     "CHPC"
                  ],
                  "untl:meta":[
                     {
                        "qualifier":"metadataCreator",
                        "#text":"htarver"
                     },
                     {
                        "qualifier":"system",
                        "#text":"DC"
                     },
                     {
                        "qualifier":"system",
                        "#text":"PTH"
                     },
                     {
                        "qualifier":"ark",
                        "#text":"ark:/67531/metadc504838"
                     },
                     {
                        "qualifier":"metadataCreationDate",
                        "#text":"2015-05-15, 06:42:40"
                     },
                     {
                        "qualifier":"metadataModifier",
                        "#text":"htarver"
                     },
                     {
                        "qualifier":"metadataModificationDate",
                        "#text":"2015-06-23, 13:33:54"
                     },
                     {
                        "qualifier":"hidden",
                        "#text":"False"
                     }
                  ],
                  "untl:language":"nol",
                  "untl:note":{
                     "#text":"Folder - Manion 6/82; File - 165-9",
                     "qualifier":"display"
                  },
                  "untl:identifier":[
                     {
                        "qualifier":"itemURL",
                        "#text":"https://texashistory.unt.edu/ark:/67531/metadc504838/"
                     },
                     {
                        "qualifier":"LOCAL-CONT-NO",
                        "#text":"UNTA_AR004-19-165-09"
                     },
                     {
                        "qualifier":"thumbnailURL",
                        "#text":"https://texashistory.unt.edu/ark:/67531/metadc504838/thumbnail/"
                     },
                     {
                        "qualifier":"ARK",
                        "#text":"ark:/67531/metadc504838"
                     }
                  ],
                  "untl:description":[
                     {
                        "qualifier":"content",
                        "#text":"A photograph of Tommy Manion's horse, Impressive standing in a grassy field with a brown fence visible in the background."
                     },
                     {
                        "qualifier":"physical",
                        "#text":"1 photograph : negative, col. ; 6 x 6 cm."
                     }
                  ],
                  "xmlns:untl":"http://digital2.library.unt.edu/untl/",
                  "untl:subject":[
                     {
                        "qualifier":"LCSH",
                        "#text":"Cutting horses -- Photographs."
                     },
                     {
                        "qualifier":"UNTL-BS",
                        "#text":"Agriculture - Domestic Animals"
                     },
                     {
                        "qualifier":"namedAnimal",
                        "#text":"Impressive"
                     },
                     {
                        "qualifier":"UNTL-BS",
                        "#text":"Sports and Recreation - Riding - Horses"
                     },
                     {
                        "qualifier":"UNTL-BS",
                        "#text":"Social Life and Customs - Clubs and Organizations - National Cutting Horse Association"
                     },
                     {
                        "qualifier":"KWD",
                        "#text":"NCHA"
                     },
                     {
                        "qualifier":"KWD",
                        "#text":"show horses"
                     }
                  ],
                  "untl:format":"image"
               }
            }
         },
         "score":12.464051
      }
   ],
   "facets":[

   ]
}
