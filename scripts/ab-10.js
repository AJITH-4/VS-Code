// Getting input via STDIN
const { parse } = require("path");
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

 let N = parseInt(userInput);
 N = N**2;
 console.log(N);

  //end-here
});