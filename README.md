# dpla-app
<center>![Endeavor Logo] (https://dpla-app.herokuapp.com/images/EndeavorLogoTransparent.png)
<h1>Please visit Endeavor on Heroku to see the app deployed: https://dpla-app.herokuapp.com/</h1></center>

===================================================================================
UX/UI:
Initial color palette: http://wagnermediaworks.com/wp-content/uploads/2017/01/canoe-color-palette-with-pic.png

Logo Possiblities:
http://wagnermediaworks.com/wp-content/uploads/2017/01/Endeavor-Lion-1.png
http://wagnermediaworks.com/wp-content/uploads/2017/01/endeavor-Mountain-1.png
http://wagnermediaworks.com/wp-content/uploads/2017/01/endeavor-logo-text-only-1.png

Final Logo:
Opaque: http://wagnermediaworks.com/wp-content/uploads/2017/01/endeavor-Mountain-Final.png
Transparent:http://wagnermediaworks.com/wp-content/uploads/2017/01/EndeavorLogoTransparent.png

User stories:http://wagnermediaworks.com/wp-content/uploads/2017/01/Endeavor-User-Stories.pdf

===================================================================================
Query for Art Images that will return 25 images:
http://api.dp.la/v2/items?q=art&sourceResource.type=image&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74
“object” property is direct link to image

Query for Art Images from after the year 2010
http://api.dp.la/v2/items?q=art&sourceResource.type=image&sourceResource.date.after=2010&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74

Query for Art Images with 25 results excluding those from a certain collection identified by id:
http://api.dp.la/v2/items?q=art&sourceResource.type=image&sourceResource.collection.id=NOT%20ccf588427fcc1b61942b484e7d73062a&page_size=25&api_key=7c4f10ae79cee82c4372d03dba940c74

