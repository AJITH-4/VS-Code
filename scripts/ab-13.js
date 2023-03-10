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

  let n = parseInt(userInput[0]);
  let f = 1;
  while(n>1){
    f = f*n;
    n = n-1;
  }
  console.log(f);

  //end-here
});