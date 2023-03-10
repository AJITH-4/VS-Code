// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let name = userInput[0];


    let reverse = [];

    for (let i = name.length-1; i >= 0; i--){
        reverse.push(name[i]);
    }

    console.log(reverse.join(''));

  //end-here
});