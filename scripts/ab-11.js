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

  let[a,b,c]=(userInput[0]).split(' ').map((item)=>parseInt(item));

  // X = {(-b) + (b² - 4ac) } / 2a & {-b-√(b² -4*a*c)} / 2*a

   
  //end-here
});