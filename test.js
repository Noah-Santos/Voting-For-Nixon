// imports the data from the json
let voters = require("./test.json");
console.log(voters);

let test = {
    firstName: "Jacob",
    lastName: "Rigney",
    gender: "male",
    vote: "Nixon"
}
voters.push(test);
console.log(voters);
// const fs = require("fs");

// grabs the fs modules
const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

// create simple test object
let testing = {
    name: "test",
    breed:"test",
    color:"test"
}
let testing2 = {
    name: "test2",
    breed:"test2",
    color:"test2"
}
let testing3 = {
    name: "test3",
    breed:"test3",
    color:"test3"
}
let array = [];
array.push(testing)
array.push(testing2)
array.push(testing3)
// converts the objects to json format and adds to the array
function add(data){
    // passes the object parameter into a json format
    let temp = JSON.stringify(data)
}
add(array)
console.log(array)
// convert(array)

function convert(test){
    
    // sees if there is an error
    function finished(error){
        if(error){
            console.error(error);
            return
        }
    }
    // loops through array and pushes the json format obejct into the json file
    // first parameter determiens which json file the data will be sent to
    // second parameter determines what data is going to be sent
    // third parameter prevents the data from being saved if there is an error
    for(let i = 0; i < test.length; i++){
        fs.writeFile("test.json", test[i], finished)
    }
    
}
