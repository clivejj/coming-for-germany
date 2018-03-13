svg = document.getElementById("box");
germany = document.getElementById("germany");
china = document.getElementById("china");

var germanyData = [14, 10, 7]
var chinaData = [1, 6, 2]
var circles = []

var i = 0;
while (i < 2) {   
 var circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", svg.getAttribute("width")/2);
    circle.setAttribute("cy", svg.getAttribute("height")/2);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill","lightsteelblue");
    circle.setAttribute("stroke","black");

germany.addEventListener('click', modifyG);
china.addEventListener('click', modifyC);

var modifyG = function (e) {
    var circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", svg.getAttribute("width")/2);
    circle.setAttribute("cy", svg.getAttribute("height")/2);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill","lightsteelblue");
    circle.setAttribute("stroke","black");
    

