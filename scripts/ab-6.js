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

    let a =parseInt (userInput[0]);

    let Area = ((1.732050/4)*(a**2));



   console.log(Area.toFixed(2));

  //end-here
});