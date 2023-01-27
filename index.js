
// when page loads, creates and adds elements to each div
function loaded(){
//  alert("Vote for Nixon");
    // loops to create obth images and vote buttons
    for(let i = 1; i < 3; i++){
        // creates images
        let img = document.createElement("img")
        img.src = `${i}.jpg`;
        // creates buttons and adds text to it
        let button = document.createElement("button")
        button.innerHTML = "Vote";
        // determines which side the button and image belongs to
        if(i == 1){
            // id of vote button
            button.setAttribute("id", "correct");
            content1.appendChild(img);
            content1.appendChild(button);
        }else{
            // sets the cursor to wrong when they hover over mcgovern
            button.setAttribute("id", "wrong");
            // creates event listener to ask them if they really want to vote for mcgovern
            button.addEventListener("click", really);
            content2.appendChild(img);
            content2.appendChild(button);
        }
        
    }
}

// event listener to when user moves mouse over nixon's side
section1.addEventListener("mousemove", voteButton);

// function to move vote button to user cursor
function voteButton(e){
    // sets position to the client x and y positon
    correct.style.position = "absolute";
    correct.style.left = e.clientX+"px";
    correct.style.top = e.clientY+"px";
    // console.log(e.clientX)

}



// function to ask
function really(){
    // creates text and buttons to verify their decision to vote
    this.style.visibility = "hidden"
    let text = document.createElement("h2");
    text.innerHTML = "Do you really want to vote for McGovern?";
    let yes = document.createElement("button");
    yes.innerHTML = "Yes"
    // sets the id to moves
    yes.setAttribute("id", "moves");
    let no = document.createElement("button");
    no.innerHTML = "No";
    content2.appendChild(text);
    content2.appendChild(yes);
    content2.appendChild(no);
}

// // creates the vote for nixon at the bottom of the page
// document.addEventListener("mousemove", display);

// // sets the vote for nixon visible
// function display(){
//     document.getElementById("context").style.visibility = "visible";
//     document.addEventListener("mousemove", hide);
// }

// // sets the vote for nixon invisible
// function hide(){
//     document.getElementById("context").style.visibility = "hidden";
// }

// // makes the nixon text visible for 2 seconds
// let show, clear;
// function displayText(){
//     show = clear = "";
//     show = setInterval(display, 500);
//     clear = setInterval(hide, 2000);
//     setInterval(stop, 2000);
// }

// function stop(){
//     clearInterval(show);
//     clearInterval(clear);
// }