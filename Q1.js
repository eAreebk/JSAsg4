/*Create a program that uses a for loop to generate and display themultiplication table for a given number.
 Prompt the user to enter anumber, and then use a for loop to display the multiplicationtablefor that number up to 10.*/

var num = +prompt("Enter a number of which you want to generate table", "7");

function table(){
    console.log("       Table of", num, "\n");
    for(let i=1; i<=10; i++){
      console.log("\n     ", num, " * ", i, "=", num*i  );
    }
}

table();