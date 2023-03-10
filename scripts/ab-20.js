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

  let n = parseInt(userInput);
  sum = 1;
  for(i=1; i<=3;i++){
    sum =(i*n) ;
    console.log(sum);
  }

  //end-here
});