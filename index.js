
// when page loads, creates and adds elements to each div
function loaded(){
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
            // add event listener to say when nixon won
            button.addEventListener("click", win)
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

// function to say nixon won when his vote button is clicked and changes back to vote after 2 seconds
function win(){
    title.innerHTML = "Nixon Wins!";
    title.style.fontSize = "600%";
    title.style.fontWeight = "bold"
    setInterval(function(){title.innerHTML = "Vote";}, 2500);
}

// event listener to when user moves mouse over nixon's side
document.addEventListener("mousemove", voteButton);
// remove event listener on mcgovern's side
section2.removeEventListener("mousemove", voteButton);

// function to move vote button to user cursor
function voteButton(e){
    // sets position to the client x and y positon
    correct.style.position = "fixed";
    if(e.clientX < (screen.width/2) - correct.offsetWidth)correct.style.left = e.clientX-20+"px";
    correct.style.top = e.clientY-10+"px";
    // console.log(e.clientX)

}

// function to ask
function really(){
    // creates text and buttons to verify their decision to vote
    this.style.visibility = "hidden"
    let text = document.createElement("h2");
    text.innerHTML = "Do you really want to vote for McGovern?";
    // sets id of the text
    text.setAttribute("id", "question")
    content2.appendChild(text);
    let yes = document.createElement("button");
    yes.innerHTML = "Yes"
    // sets the id to moves
    yes.setAttribute("id", "moves");
    // hides yes button on hover
    yes.addEventListener("mouseenter", gone);
    // event listener to make button appear again whjen not hovering on it
    yes.addEventListener("mouseleave", back);
    content2.appendChild(yes);
    let no = document.createElement("button");
    no.innerHTML = "No";
    content2.appendChild(no);
    // adds event listener for when they click no
    no.addEventListener("click", good);
}

// hides the button on hover
function gone(){
    this.style.visibility = "hidden";
    this.style.disables = "true";
}

// makes yes button visible again
function back(){
    this.style.visibility = "visible";
}

// resets the buttons back to vote and tells the user good job
function good(){
    // removes eventListeners
    this.removeEventListener("click", good);
    moves.removeEventListener("mouseover", gone);
    moves.removeEventListener("mouseout", back);
    // removes the buttons and text
    this.remove();
    moves.remove();
    question.remove();
    // makes old vote button visible again
    wrong.style.visibility = "visible";
    // creates a text that says good choice and disappears after 1.5 seconds
    let goodText = document.createElement("h3");
    goodText.innerHTML = "Good Choice";
    content2.appendChild(goodText);
    setInterval(function() {goodText.remove();}, 1500);
}

// creates the vote for nixon at the bottom of the page
document.addEventListener("contextmenu", display);

// sets the vote for nixon visible and hides it when user clicks
function display(){
    document.getElementById("context").style.visibility = "visible";
    document.addEventListener("click", hide);
}

// sets the vote for nixon invisible
function hide(){
    document.getElementById("context").style.visibility = "hidden";
}