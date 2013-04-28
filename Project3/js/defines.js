// Global variables

var width = 615, height = 400;
var miniWidth = 180, miniHeight = 180;
var dataToShow = "";
var timer = null;
var stateClickedData = null;
var countyClickedData = null;
var choroplethMiniMapsJSONData;
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
    clearTimeout(timer);
    hideLegend();
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
    $('#miniMap1Title').html("");
    $('#miniMap2Title').html("");
    $('#miniMap3Title').html("");
    $('#miniMap4Title').html("");
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
    if($('#housingTypeSelect').val() == 'singlefamily') {
        showreelFilename = "data/data_output_HP_Years_SingleFamilyHomes.csv";
    } else if ($('#housingTypeSelect').val() == 'condo') {
        showreelFilename = "data/data_output_HP_Years_Condo.csv";
    } else if ($('#housingTypeSelect').val() == 'all') {
        showreelFilename = "data/data_output_HP_Years_SFC.csv";
    }
    removeMainMap();
    $("#mainMapHTML").load("showreel.html");
}

function reDrawScatterplotForState(countiesFIPs)
{
    console.log("reDrawScatterplotForState");
}

$(document).ready(function()
{
    $("#mapVariablesSelector").hide();

    $("#dialog-about").hide();

    $("#dialog-description").hide();

    $("#dialog-screencast").hide();

    $('#animationPausedMsg').hide();

    $("#mainMapHTML").load("choropleth.html");
    $("#mainScatterplotMapHTML").load("scatterplot.html");

    $("#mapSelection").change(function() {
        removeMainMap();
        removeMiniMaps();
        if($("#mapSelection").val() == 'showreel') {
            $('#miniMapTitle').html("Animation Story - Click anywhere on the animation on the left to view details");
            showreelFilename = "data/data_output_HP_Years_SingleFamilyHomes.csv";
        }
        if($("#mapSelection").val() == 'choropleth') {
            $('#miniMapTitle').html("Drill-Down information - Select objects on the left to activate this display");
            $("#mainScatterplotMapHTML").load("scatterplot.html");
            $('#scatterplotMapDiv').show();
        }
        var htmlToLoad = $("#mapSelection").val() + ".html";
        $("#mainMapHTML").load(htmlToLoad);
    });

});

