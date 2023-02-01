var totalDrumButtons = document.querySelectorAll(".drum").length;

var i = 0;

while(i < totalDrumButtons){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        alert("i got clicked");
    
    });
    
    i++;

}

