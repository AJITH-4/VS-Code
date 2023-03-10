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

  let A = userInput[0];
  let B = userInput[1];
  let C = userInput[2];

  
  if((A>B) && (A>C)){

    console.log(A);
  
  }else{
 
    if((B>C)){
 
      console.log(B);
 
    }else {
 
    console.log(C);
 
  }

}

  //end-here
});
