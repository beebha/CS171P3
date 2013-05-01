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
var datasets = [{},{},{},{},{}];

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

function drawMiniBarChart(data, mapIDToDraw, mapID, mapWidth, mapHeight, barColor)
{
    var barHeight = 15;
    var barLabelWidth = 110;
    var barLabelPadding = 5;
    var gridLabelHeight = 18;
    var gridChartOffset = 3;
    var maxBarWidth = 20;

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
            return (2*barValue(d));
        })
        .attr('stroke', 'white')
        .attr('fill', barColor);

    barsContainer.selectAll("text").data(data).enter().append("text")
        .attr("x", function(d) {
            return (2*barValue(d));
        })
        .attr("y", yText)
        .attr("dy", ".25em")
        .attr("font-size", "10")
        .attr("text-anchor", "start")
        .attr("fill", "black")
        .attr("stroke", "none")
        .text(function(d) {
            return d3.round(barValue(d), 2);
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
                legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;"+(legendCount+1).formatMoney(2, '')+"&nbsp;-&nbsp;"+(legendCount+=increment).formatMoney(2, '')+"<br>";
            } else {
                legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&gt;"+(legendCount+1).formatMoney(2, '')+"<br>";
            }
        } else if (type == 'animationHP') {
            legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;"+housingRegions[i]+"<br>";
        } else if (type == 'animationSFC') {
            legend += "<span class='" +colorClass+"'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;"+housingTypes[i]+"<br>";
        }

    }
    if(type == 'counties') {
        legend += "<span class='countiesNA'>&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;No Data For County<br>";
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

function showAbout()
{
    $("#dialog-about").dialog({
        dialogClass: "popupDialogCls",
        width:400,
        height:150,
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
    $("#screencastVideo").attr("src", "http://www.youtube.com/embed/8QuOhsTeqN0");
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

function reDrawScatterplotForState(countiesFIPs)
{
    console.log("reDrawScatterplotForState");
}

function showNavigation()
{
    introJs().start();
}

function startHousingStory()
{
    // most interesting state selected NY
    $("#housing-story-intro").dialog({
        dialogClass: "popupDialogCls",
        width:300,
        height:250,
        modal: true,
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                selectStoryState();
            }
        }
    });
}

function selectStoryState()
{
    for(indStateData in housingStatesD3Map) {
        if(housingStatesD3Map[indStateData].STATE == "New York") {
            console.log($('#'+housingStatesD3Map[indStateData].STATE_FIPS))
        }
    }
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




