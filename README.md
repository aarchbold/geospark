# geospark
Marketing site for Geospark

## local development
This site is strictly client side. There is no server side code in this repo. There is some moustache templating JavaScript, however, this is done by using static JSON.

## WARNING: If you need to make edits to this code, please update the files inside the "src" directory and run gulp. Otherwise you run the risk of things getting over written.

### install development environment
* Clone this repo to your local machine
* Navigate to the root of the repo
* Run "npm install" (this should install all dependencies)
* Run "gulp" to compile files from "src", or "gulp watch" to watch files from "src" directory.

NOTE: if you get errors running gulp, you may need install some dependencies individually.

### directory breakdown
Gulp watch will watch all the following directories for changes:

* /src/html/includes/ - common includes like contact form, header, topnav, footer, etc
* /src/html/site/ - html pages
* /src/html/templates/* - moustache templates for rendering loops like press clippings, testimonials, etc.
* /src/html/templates/press.html - If you need to update the press section articles, you can find the source JSON here. 
* /src/html/templates/testimonials.html - If you need to update the testimonial section, you can find the source JSON here. 
* /src/js/vendors/ - 3rd party js libraries and plugins (if you want to add a new library, you can drop the js file in here and it will auto build to the vendors.js file)
* /src/js/app/ - marketing site specific JavaScript files. 
* /src/sass/ - raw sass/css files

Note: images and videos are stored in the compiled site static directory.
* /site/static - compiled css, js, and static images and video files

### Updating the code
When making updates to the source files, just make sure you are running "gulp watch" in terminal from inside the root directory of this repo.
When creating brand new files you may need to re-run "gulp" in order to get gulp to notice them. So if you add a new .sass file or a new html file and gulp watch doesn't pick it up. Just close gulp, re-run "gulp" and then "gulp watch" and it should work after that.




