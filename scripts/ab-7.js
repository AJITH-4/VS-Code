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

  let month =parseInt (userInput [0]);
  if (month>=1 && month<=12){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        console.log(31);
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30);
        break;
        default:
        console.log(28);

    } 

    } else {
     
          console.log("Error"); 
    }
 
  //end-here
});