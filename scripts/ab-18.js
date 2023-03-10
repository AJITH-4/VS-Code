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

  let [A,N]=(userInput[0].split( ' ').map((item) =>parseInt(item)));

   for(i=1; i<=N; i++){

    console.log(A);
   }

  
  //end-here
});