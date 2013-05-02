README
------

Running the Code:
1. Unzip the submission folder into your preferred location
2. Start the Simple Python Server via the following command : python -m SimpleHTTPServer 8888 &
3. Access the web visualization via http://localhost:8888/UNZIPPED_LOCATION/Project3/index.html

Code Structure:
index.html -> Entry point of visualization and defines layout
choropleth.html -> Logic for Choropleth Map
choroplethMiniMap -> Logic for mini maps displayed for Choropleth Map
scatterplot.html -> Logic for Scatterplot Map and associated mini maps.
showreel.html -> Logic for Showreel Map.

css folder
	- styles.css -> Custom defined CSS file for Project 3
	- introjs.css -> Intro JS CSS Library
	- vader folder -> JQuery UI Css Library

data folder
 	- contains all json and csv used for Project 3
 	- inclusion of minified JSON files for faster loading

images folder
    - contains all images used for Project 3

js folder
	- defines.js - Custom defined JS file for Project 3 containing global variables and functions
	- jquery-1.9.1.js - JQuery JS Library
	- jquery-ui-1.10.2.custom.js - JQuery UI JS Library
	- intro.js - Intro JS Library (http://usablica.github.io/intro.js/)
	- queue.v1.min.js - D3 plugin Queue JS Library (http://d3js.org/queue.v1.min.js)
	- topojson.v0.min.js - D3 plugin TopoJSON JS Library (http://d3js.org/topojson.v0.min.js)
	- d3.v3.min.js - D3 JS Library (http://d3js.org/d3.v3.min.js)
	- colorbrewer.js - D3 provided colorbrewer Library (https://github.com/mbostock/d3/tree/master/lib/colorbrewer)
	  (This file comes with the associated LICENSE file as well)

Notes:
    - Each html file other than the index.html is loaded into the index.html into a div allocated to load the html via JQuery.
    - All libraries are being hosted within the project
    - All button behavior is explained in detail in the Process Book, but here's a brief overview:
        => Housing Story (Storytelling for Choropleth/Scatterplot Visualization)
        => Navigation (Highlights details for navigating in the Choropleth/Scatterplot Visualization)
        => About this Project (Project Description)
        => Screencast (Project Screencast)
        => Team (Project Team Details)
    - The showreel animation was based upon the following example and was modified for the Project's needs (http://bl.ocks.org/mbostock/1256572)

Screencast URL : http://www.youtube.com/watch?v=8QuOhsTeqN0&feature=youtu.be
