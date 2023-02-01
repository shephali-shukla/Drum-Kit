//this loop can create problems in case we add more buttons to website.
var totalDrumButtons = document.querySelectorAll("button").length;
for(var i=0;i<totalDrumButtons;i++){

document.querySelectorAll("button")[i].addEventListener("click", function (){
    alert("i got clicked");

});

}

