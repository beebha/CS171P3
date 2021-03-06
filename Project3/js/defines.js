// Global variables

var width = 615, height = 400;
var miniWidth = 180, miniHeight = 180;
var dataToShow = "";
var timer = null;
var stateClickedData = null;
var countyClickedData = null;
var housingStatesD3Map = null;
var housingCountiesD3Map = null;

var localeJsonData11, localeJsonData10, localeJsonData09, localeJsonData08, localeJsonData07;
var localeDataMap11 = d3.map();
var localeDataMap10 = d3.map();
var localeDataMap09 = d3.map();
var localeDataMap08 = d3.map();
var localeDataMap07 = d3.map();
var datasets = new Array(5);

var showreelFilename = "data/data_output_HP_Years_SingleFamilyHomes.csv";

Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "$";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

Number.prototype.formatNumber = function(places, thousand, decimal) {
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    thousand = thousand || ",";
    decimal = decimal || ".";
    var number = this,
        negative = number < 0 ? "-" : "",
        i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

function drawMiniBarChart(data, mapIDToDraw, mapID, mapWidth, mapHeight, barColor, xScale)
{
    var barHeight = 15;
    var barLabelWidth = 90;
    var barLabelPadding = 5;
    var gridLabelHeight = 18;
    var gridChartOffset = 3;
    var maxBarWidth = 20;
    xScale = xScale != undefined ? xScale: 1;

    var barLabel = function(d) { return d.label; };
    var barValue = function(d) { return d.value; };

    var yScale = d3.scale.ordinal().domain(d3.range(0, data.length)).rangeBands([0, data.length * barHeight]);
    var y = function(d, i) { return yScale(i); };
    var yText = function(d, i) { return y(d, i) + yScale.rangeBand() / 2; };
    var x = d3.scale.linear().domain([0, d3.max(data, barValue)]).range([0, maxBarWidth]);

    var miniMap2SVG = d3.select("#"+mapIDToDraw)
        .append("svg")
        .attr("id", mapID)
        .attr('width', mapWidth)
        .attr('height', mapHeight);


    var gridContainer = miniMap2SVG.append('g')
        .attr('transform', 'translate(' + barLabelWidth + ',' + gridLabelHeight + ')');


    var labelsContainer = miniMap2SVG.append('g')
        .attr('transform', 'translate(' + (barLabelWidth - barLabelPadding) + ',' + (gridLabelHeight + gridChartOffset) + ')');

    labelsContainer.selectAll('text').data(data).enter().append('text')
        .attr('y', yText)
        .attr('stroke', 'none')
        .attr('fill', 'black')
        .attr("font-size", "10")
        .attr('text-anchor', 'end')
        .text(barLabel);

    var barsContainer = miniMap2SVG.append('g')
        .attr('transform', 'translate(' + barLabelWidth + ',' + (gridLabelHeight + gridChartOffset) + ')');

    barsContainer.selectAll("rect").data(data).enter().append("rect")
        .attr('y', y)
        .attr('height', yScale.rangeBand())
        .attr('width', function(d) {
            return (barValue(d) * xScale);
        })
        .attr('stroke', 'white')
        .attr('fill', barColor);

    barsContainer.selectAll("text").data(data).enter().append("text")
        .attr("x", function(d) {
            return barValue(d) < 80 ? (barValue(d) * xScale) + 5: (barValue(d) * xScale) - 5;
        })
        .attr("y", yText)
        .attr("dy", ".35em")
        .attr("font-size", "10")
        .attr("text-anchor", function(d){
            return barValue(d) < 80 ? "start": "end";
        })
        .attr("fill", "black")
        .attr("stroke", "none")
        .text(function(d) {
            return d3.round(barValue(d), 1);
        });

    barsContainer.append("line")
        .attr("y1", -gridChartOffset)
        .attr("y2", yScale.rangeExtent()[1] + gridChartOffset)
        .style("stroke", "#000000");

}

function showLegend(type)
{
    var noOfColors = 0;
    var housingRegions = ["West", "Northeast", "South", "Midwest"];
    var housingTypes = ["Single Family", "Condo"];
    if (type == 'states' || type == 'counties')
        noOfColors = 8;
    if (type == 'animationHP')
        noOfColors = 4;
    if (type == 'animationSFC')
        noOfColors = 2;

    var legend = "<h4>Map Legend (USD, $)</h4>";

    if (type == 'animationHP' || type == 'animationSFC') {
        legend = "<h4>Map Legend</h4>";
    }

    var legendCount = 0;
    var increment = 100000;
    for(var i=0; i < noOfColors; i++) {
        var colorClass = type+i;
        if(type == 'states' || type == 'counties') {
            if(i < (noOfColors-1)) {
                legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;"+(legendCount+1).formatMoney(2, '')+"&nbsp;-&nbsp;"+(legendCount+=increment).formatMoney(2, '')+"<br />";
            } else {
                legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&gt;"+(legendCount+1).formatMoney(2, '')+"<br />";
            }
        } else if (type == 'animationHP') {
            legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;"+housingRegions[i]+"<br />";
        } else if (type == 'animationSFC') {
            legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;"+housingTypes[i]+"<br />";
        }

    }
    if(type == 'counties') {
        legend += "<span class='countiesNA'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;No Data For County<br />";
    }
    $('#mainMapLegend').show();
    $('#mainMapLegend').html(legend);
}

function hideLegend()
{
    $('#mainMapLegend').hide();
    $('#mainMapLegend').html("");
}

function getFormattedPrice(val)
{
    return parseInt(val).formatMoney();
}

function removeMainMap()
{
    hideLegend();
    if(timer != null && jQuery.type(timer) === 'object') {
        timer.pause();
    }
    timer = null;
    d3.select("#mainMap").select("svg").remove();
    d3.select("#mainScatterplotMap").select("svg").remove();
    d3.select("#miniMap1").select("svg").remove();
    d3.select("#miniMap2").select("svg").remove();
    d3.select("#miniMap3").select("svg").remove();
    d3.select("#miniMap4").select("svg").remove();
    d3.select("#miniScatterplotMap1").select("svg").remove();
    d3.select("#miniScatterplotMap2").select("svg").remove();
    d3.select("#miniScatterplotMap3").select("svg").remove();
    d3.select("#miniScatterplotMap4").select("svg").remove();
    d3.select("#mainMap").selectAll("select").remove();
    d3.select("#scatterMapControls").selectAll("select").remove();
    d3.select("#mapVariablesSelector").selectAll("select").remove();
    $('#scatterplotMapDiv').hide();
    $('#mainMapDetails').hide();
    $('#mainScatterplotMapDetails').hide();
    $('#mainScatterplotMapLegend').hide();
    $("#scatterMapControls").hide();
    $("#mapVariablesSelector").hide();
    $("#mapControls").hide();
    $("#mapControlsForScatterplot").hide();
    $("#animationControlsForScatterplot").hide();
    $('#animationPausedMsg').hide();
    $('#animationPauseButton').hide();
    $('#miniMap1Title').html("");
    $('#miniMap2Title').html("");
    $('#miniMap3Title').html("");
    $('#miniMap4Title').html("");
    $('#animationTitle').html("");
    $('#animationDetails').html("");
}

function removeMiniMaps()
{
    d3.select("#miniMap1").select("svg").remove();
    d3.select("#miniMap2").select("svg").remove();
    d3.select("#miniMap3").select("svg").remove();
    d3.select("#miniMap4").select("svg").remove();
    $('#miniMap1Title').html("");
    $('#miniMap2Title').html("");
    $('#miniMap3Title').html("");
    $('#miniMap4Title').html("");
}

function removeMiniScatterMaps()
{
    d3.select("#miniScatterplotMap1").select("svg").remove();
    d3.select("#miniScatterplotMap2").select("svg").remove();
    d3.select("#miniScatterplotMap3").select("svg").remove();
    d3.select("#miniScatterplotMap4").select("svg").remove();
    $('#miniScatterplotMapTitle').show();
    $('#miniScatterplotMap1Title').html("");
    $('#miniScatterplotMap2Title').html("");
    $('#miniScatterplotMap3Title').html("");
    $('#miniScatterplotMap4Title').html("");
}

function showAbout()
{
    $("#dialog-about").dialog({
        dialogClass: "popupDialogCls",
        width:400,
        height:200,
        modal: true,
        buttons: {
            Ok: function() {
              $( this ).dialog("close");
            }
        }
    });
}

function showProjectDescription()
{
    $("#dialog-description").dialog({
        dialogClass: "popupDialogCls",
        width:550,
        height:400,
        modal: true,
        buttons: {
            Ok: function() {
              $( this ).dialog("close");
            }
        }
    });
}

function showProjectScreencast()
{
    $("#screencastVideo").attr("src", "http://www.youtube.com/embed/c0VjuilKodk");
    $("#dialog-screencast").dialog({
        dialogClass: "popupDialogCls",
        width:520,
        height:450,
        modal: true,
        beforeClose: function( event, ui ) {
            $("#screencastVideo").attr("src", "");
        },
        buttons: {
            Ok: function() {
              $(this).dialog("close");
            }
        }
    });
}

function redrawShowReel()
{
    $('#miniMapTitle').html("Click <button type=\"button\"" +
                        "class=\"ui-state-default ui-corner-all\"" +
                        "id=\"animationPauseButton\"" +
                        "onclick=\"javascript:animationClick();\">Pause Animation</button> to " +
                "pause the animation and view details via mouseover tooltips.");
    if($('#housingTypeSelect').val() == 'singlefamily') {
        showreelFilename = "data/data_output_HP_Years_SingleFamilyHomes.csv";
    } else if ($('#housingTypeSelect').val() == 'condo') {
        showreelFilename = "data/data_output_HP_Years_Condo.csv";
    } else if ($('#housingTypeSelect').val() == 'all') {
        showreelFilename = "data/data_output_HP_Years_SFC.csv";
    }
    removeMainMap();
    $("#mainMapHTML").load("showreel.html");
    $('#animationPauseButton').show();
}

function reDrawScatterplotForState(localeArray)
{
    d3.select("#mainScatterplotMapSVG").selectAll(".brushed")
        .classed("brushed", false);

    d3.select("#mainScatterplotMapSVG").selectAll("circle")
        .classed("brushed", function(d){
            // not found returns -1 so adding 1 results in essentially a boolean for found/not found
            return (jQuery.inArray(d[0], localeArray) + 1);
        });

    redrawScatter();
}

function redrawScatter(){
    yearSlider=$('#slider').slider();

    yearSlider.slider('option', 'value', datasetIndex);
    yearSlider.slider('option','slide')
        .call(yearSlider,null,{ handle: $('.ui-slider-handle', yearSlider), value: datasetIndex });
}

function showNavigation()
{
    setIntroDetails('NAVIGATION');
    introJs().start();
}

function startHousingStory()
{
    // most interesting state selected NY
    setIntroDetails('STORY');
    $("#housing-story-intro").dialog({
        dialogClass: "popupDialogCls",
        width:500,
        height:300,
        modal: true,
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                selectStoryState("New York", true);
            }
        }
    });
}

function selectStoryState(selectedState, showNavigation)
{
    for(indStateData in housingStatesD3Map) {
        if(housingStatesD3Map[indStateData].STATE == selectedState) {
            setStateClick(housingStatesD3Map[indStateData]);
            if(showNavigation) {
                introJs().goToStep(7).start();
            }
        }
    }
}

function setStateClick(stateData)
{
    stateClickedData = stateData;
    dataToShow = "state";
    $('#' + stateData.STATE_FIPS).attr("class", "statesSelected");

    var detailsText = "<h3>Selection Info</h3><p><strong><em>" + stateData.STATE + "</em></strong><br />";
    detailsText += "Average Listing Price: <strong>" + getFormattedPrice(stateData.AVERAGE_LISTING_PRICE) + "</strong><br />";
    detailsText += "Median Sales Price: <strong>" + getFormattedPrice(stateData.MEDIAN_SALES_PRICE) + "</strong></p>";

    $('#mainMapDetails').show();
    $('#mainMapDetails').html(detailsText);

    for (var housingState in housingStatesD3Map)
    {
        if (stateData.STATE_FIPS != housingStatesD3Map[housingState].STATE_FIPS)
        {
            $('#' + housingStatesD3Map[housingState].STATE_FIPS).attr("class", quantize(
                    housingStatesD3Map[housingState].AVERAGE_LISTING_PRICE
            ));
        }
    }

    // set the map title
    $('#mainMapTitle').html("Housing Prices by State");

    // set minimaps data
    removeMiniMaps();
    $("#miniMapHTML").load("choroplethMiniMap.html");

    // get counties in selected state to pass to scatterplot
    var stateFIP = parseInt(stateData.STATE_FIPS);
    var FIPOfCountiesInState = [];

    for (var county in localeJsonData11)
    {
        if(localeJsonData11[county].stateID == stateFIP) {
            FIPOfCountiesInState.push(county);
        }
    }
    reDrawScatterplotForState(FIPOfCountiesInState);
}

function loadingVisualizations()
{
    $("#loading-mask").dialog({
        dialogClass: "popupDialogCls",
        width:300,
        height:150,
        modal: true
    });
}

function setIntroDetails(navigationType)
{
    var choroplethMainMapStep = "";
    var choroplethMiniMapStep = "";
    var scatterplotMainMapStep = "";
    var scatterplotMiniMainMapStep = "";
    var scatterplotPresets = "<p>These buttons activate preset plots of interest. Observe:<br />" +
                        "⇒	the notably low housing values at given median income levels in Texas<br />" +
                        "⇒	the volume of Social Security beneficiaries in Florida<br />" +
                        "⇒	the precipitous drop of housing values in Nevada<br />" +
                        "⇒	the relatively high levels of families living in poverty at similar median incomes as elsewhere in the US.</p>";


    if(navigationType == 'NAVIGATION')
    {
        choroplethMainMapStep = "<p><strong>The US Housing Cost Choropleth</strong><br /><br />" +
                        "This visualization shows the general trends in housing prices (average listing price in USD ($)) across the US.<br />" +
                        "Interactivity in this map includes the following:<br /><br />" +
                        "⇒	Mousing over any state displays a tooltip.<br />" +
                        "⇒	Clicking any state highlights the clicked state.<br />" +
                        "⇒	Double clicking any state zooms in to show the county level details.<br />" +
                        "⇒	Double clicking again zooms out to show the states map again.<br />" +
                        "⇒	Clicking any county highlights the clicked county.<br />" +
                        "⇒	Clicking any county outside the state, selects the new state.<br />" +
                        "⇒	Clicking any state selects the counties in the Scatterplot Map.<br />" +
                        "⇒	Mousing over any county also displays a tooltip.<br />" +
                        "⇒	Mini maps are displayed based on clicked state or county.<br /></p>";

        choroplethMiniMapStep = "<p>This section contains the mini graphs associated with the The US Housing Cost Choropleth.<br /><br />" +
                        "Based on which state/county has been clicked, 4 graphs are shown if data is available.<br />" +
                        "⇒	Occupancy Info shows the segregation between Rental and Owned Homes.<br />" +
                        "⇒	Housing Size Info shows the breakdown for the number of bedrooms.<br />" +
                        "⇒	Housing Value Info shows the breakdown for the housing prices.<br />" +
                        "⇒	Housing Age Info shows the breakdown for the age of the house.<br />" +
                        "NOTE: This section is scrollable. This is required to view all graphs.<br /></p>";

        scatterplotMainMapStep = "<p><strong>The Socio-Economics Factors Scatterplot</strong><br /><br />" +
                        "This visualization allows the exploration of US socio-economic patterns " +
                        "by selecting the data to plot on the X and Y axis of the scatter plot.<br />" +
                        "Interactivity in this map includes the following:<br /><br />" +
                        "⇒	X and Y axes can each be assigned 20 different datasets via dropdown menus.<br />" +
                        "⇒	Dragging a rectangular selection box brushes data points.<br />" +
                        "⇒	Mini maps are displayed based on selected data points.<br />" +
                        "⇒ Brushed selections are draggable to new locations.<br />" +
                        "⇒ Five years of data can be viewed and animated using animation controls on the lower right.<br /></p>";

        scatterplotMiniMainMapStep = "<p>This section contains the mini graphs associated with the scatterplot.<br /><br />" +
                        "The selected point data are aggregated and displayed in four graphs:<br />" +
                        "⇒	Educational Attainment shows the ratios of education levels<br />" +
                        "⇒	Racial Composition shows the summary of population by race<br />" +
                        "⇒	Age Composition shows the ratios of age group populations.<br />" +
                        "⇒	Birthplace reports the percentages of where the population was born.<br /><br />" +
                        "NOTE: This section is scrollable. This is required to view all graphs.</p>";

    }
    if(navigationType == 'STORY')
    {
        choroplethMainMapStep = "<p>As seen in this choropleth, the average listing price in New York State is <strong>$734,338</strong>.<br />" +
                                "The Median Sales Price is <strong>$350,000</strong>.<br />" +
                                "This puts New York in the top 3 states with the highest listing prices, i.e. <strong>>$700,000</strong>.</p>" +
                                "<p>Let's take a closer look at the drilldown details for New York.</p>" +
                                "<p>Please click the \"<strong>Next</strong>\" button below to proceed.</p>";

        choroplethMiniMapStep = "<p>The first graph is a pie chart showing Occupancy Info for New York." +
                                "Here, the % of owner occupied housing is > % of renter occupants, i.e. 64.5% vs 35.5%.</p>" +
                                "<p>The next graph is a bar chart that shows the breakdown of house sizes." +
                                "In New York, the most common house size is 3 Bedroom houses " +
                                "and the smallest % is 5 Bedroom or More housing.</p>" +
                                "<p>It's interesting to note that for in Housing Value Info bar chart, " +
                                "most houses fall between the price ranges of 50k - 499k, with the highest % in the range of 50-99k.</p>" +
                                "<p>Coming to the final bar chart that shows the Housing Year Built breakdown, it is surprising to " +
                                "see that the biggest % falls in the range of < 1940, i.e. there are many more houses " +
                                "occupied in New York built before 1940 than during more recent periods!</p>";

        scatterplotMainMapStep = "<p>Below, scatterplot points representing areas of New York with 65,000 or more inhabitants are colored orange. " +
                                "Choosing a different state will change the selected points (which are sized based on population). " +
                                "Unlike Los Angeles, datapoints representing New York are not particularly large, due to smaller counties " +
                                "in the most populous areas.<br /><br />" +
                                "Some of the more interesting findings in New York are the extrordinarily high property values relative " +
                                "to median household incomes. This is illustrated by the New York County, NY datapoint, representing the " +
                                "top of the property value scale but the midrange of household incomes. This fact isn't quite what it seems, " +
                                "though, as looking at the mean household income, instead of the median, moves the datapoint to the high end of " +
                                "both income and housing values.<br /><br />" +
                                "A rather dubious distinction for New York can be seen when looking at household incomes and food stamp " +
                                "recipient levels. Bronx County shows the highest proportion of food stamp recipients in the US, with " +
                                "nearly the lowest median household incomes. WHen animation is enabled, the rate jumps remarkably " +
                                "between 2007 and 2011.</p>";

        scatterplotMiniMainMapStep = "<p>Aggregating demographic data from larger, heterogenous areas often obscures information. " +
                                "If you lump Westchester County and Bronx County together, for example, a lot of measures " +
                                "will essentially cancel each other out. High and low earnings become, well, average.<br /><br />" +
                                "It can still be possible to develop general conclusions about various states' demographics this way. " +
                                "However, it's wise to select scatter points on an individual basis if more accurate representations " +
                                "are desired.</p>";
    }
    $('#mainMap').attr("data-intro", choroplethMainMapStep);
    $('#miniMapWrapper').attr("data-intro", choroplethMiniMapStep);
    $('#mainScatterplotMap').attr("data-intro", scatterplotMainMapStep);
    $('#miniScatterplotMapWrapper').attr("data-intro", scatterplotMiniMainMapStep);
    $('#presetPlots').attr("data-intro", scatterplotPresets);

}

$(document).ready(function()
{
    console.log("Document is ready...");

    $('#loading-mask').hide();

    loadingVisualizations();

    $('#housing-story-intro').hide();

    $("#dialog-about").hide();

    $("#dialog-description").hide();

    $("#dialog-screencast").hide();

    $('#animationPausedMsg').hide();

    $('#animationPauseButton').hide();

    $("#mapVariablesSelector").hide();

    $("#mainMapHTML").load("choropleth.html");
    $("#mainScatterplotMapHTML").load("scatterplot.html");

    $("#mapSelection").change(function() {
        loadingVisualizations();
        removeMainMap();
        removeMiniMaps();
        if($("#mapSelection").val() == 'showreel') {
            $('#miniMapTitle').html("Click <button type=\"button\"" +
                        "class=\"ui-state-default ui-corner-all\"" +
                        "id=\"animationPauseButton\"" +
                        "onclick=\"javascript:animationClick();\">Pause Animation</button> to " +
                "pause the animation and view details via mouseover tooltips.");
            showreelFilename = "data/data_output_HP_Years_SingleFamilyHomes.csv";
            $('#animationPauseButton').show();
            $('#navigationBtn').hide();
            $('#housingStoryBtn').hide();
        }
        if($("#mapSelection").val() == 'choropleth') {
            $('#miniMapTitle').html("Drill-Down information - Select objects on the left to activate this display");
            $("#mainScatterplotMapHTML").load("scatterplot.html");
            $('#scatterplotMapDiv').show();
            $('#navigationBtn').show();
            $('#housingStoryBtn').show();
        }
        var htmlToLoad = $("#mapSelection").val() + ".html";
        $("#mainMapHTML").load(htmlToLoad);
    });
});




