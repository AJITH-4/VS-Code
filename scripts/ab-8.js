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



  let N = parseInt(userInput);

  let table=" " ;

    if(N === 0){

   console.log("NULL");
  
   }else{
   
    for(i=1; i<=N ; i++){
   
      table = (table + ( i * ( 9 )) +" ");
    }
  }

    console.log(N,typeof(N));

  //end-here
});