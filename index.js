
// when page loads, creates and adds elements to each div
function loaded(){
//  alert("Vote for Nixon");
    for(let i = 1; i < 3; i++){
        let img = document.createElement("img")
        img.src = `${i}.jpg`;
        let button = document.createElement("button")
        button.innerHTML = "Vote"
        if(i == 1){
            content1.appendChild(img);
            content1.appendChild(button);
        }else{
            content2.appendChild(img);
            content2.appendChild(button);
        }
        
    }
}
// creates the vote for nixon at the bottom of the page
document.addEventListener("contextmenu", displayText);

// sets the vote for nixon visible
function display(){
    document.getElementById("context").style.visibility = "visible";
}
// sets the vote for nixon invisible
function hide(){
    document.getElementById("context").style.visibility = "hidden";
}
// makes the nixon text visible for 2 seconds
let show, clear;
function displayText(){
    show = clear = "";
    show = setInterval(display, 500);
    clear = setInterval(hide, 2000);
    setInterval(stop, 2000);
}

function stop(){
    clearInterval(show);
    clearInterval(clear);
}