// show or hide an element 
function showHide(elementId) {
    var x = document.getElementById(elementId);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// data for the drop down list
var countryStateInfo = {
    "Australia": [
        "VIC","NSW",'SA','NT','QLD','WA','TAS','ACT']
}

function fill_country() {
    //Get html elements
    var country_dl = document.getElementById("country_dl");
    //Load countries
    for (var country in countryStateInfo) {
        opt = document.createElement("OPTION");
        country_dl.options[country_dl.options.length] = new Option(country, country);
    }
}


//country Changed
function change_country() {
    var country_dl = document.getElementById("country_dl");
    var state_dl = document.getElementById("state_dl");

    // remove all options first
state_dl.length = 1;
if (country_dl.selectedIndex < 1)
return; // done
    // add the country data
    var state = countryStateInfo[country_dl.value]
    for (var i=0; i < state.length; i++) {
        state_dl.options[state_dl.options.length] = new Option(state[i], state[1]);
     }
}