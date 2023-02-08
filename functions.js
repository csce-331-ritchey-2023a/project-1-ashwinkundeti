var num = 0; // global variable
var STYLESHEET_KEY = "stylesheet";

// function button1() {
//     num++;
//     document.getElementById("output").innerHTML = "Press x " + num;
// }

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var style = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var stylesheet = style.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    var newstylesheet = "style2.css";
    if(stylesheet == "style1.css"){
        newstylesheet = "style2.css";
    }
    else{
        newstylesheet = "style1.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style.setAttribute("href", newstylesheet);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem(STYLESHEET_KEY, newstylesheet);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    console.log("entered");
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || "style1.css";
    console.log("yes");
    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    console.log(styleElement.getAttribute("href"));

    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", stylesheetValue);
    console.log(styleElement.getAttribute("href"));
    
}


