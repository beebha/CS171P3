README
------

Running the Code:
1. Unzip the submission folder into your preferred location
2. Start the Simple Python Server via the following command : python -m SimpleHTTPServer 8888 &
3. Access the web visualization via http://localhost:8888/UNZIPPED_LOCATION/Project2/index.html

Code Structure:
index.html -> Entry point of visualization and defines layout
choropleth.html -> Logic for Choropleth Map
choroplethMiniMap -> Logic for mini map displayed for Choropleth Map
scatterplot.html -> Logic for Scatterplot Map and associated mini maps.
showreel.html -> Logic for Showreel Map.
css folder
	- styles.css -> Custom defined CSS file for Project 2
	- vader folder -> JQuery UI Css Library
data folder
 	- contains all json and csv used for Project 2
js folder
	- defines.js - Custom defined JS file for Project 2 containing global variables and functions
	- jquery-1.9.1.js - JQuery JS Library
	- jquery-ui-1.10.2.custom.js - JQuery UI JS Library
	
Libraries hosted externally:
1. D3 JS Library (http://d3js.org/d3.v3.min.js)
2. D3 plugin Queue JS Library (http://d3js.org/queue.v1.min.js)
3. D3 plugin TopoJSON JS Library (http://d3js.org/topojson.v0.min.js)

Notes:
Each html file other than the index.html is loaded into the index.html into a div allocated to load the html via JQuery.

Screencast URL : http://www.youtube.com/watch?v=8QuOhsTeqN0&feature=youtu.be
