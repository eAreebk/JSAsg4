/*Calculate factorial of 5 (5!) using while loop.*/

var num = prompt("PLease enter number to find factorial ", "5");
var fac = num;
var i=fac-1;

function factorial (){
while(i>=1){
    fac = (fac*i);
    i--;
}
    console.log("\n     Factorial of", num, "= ","5!", "=", fac);
}
     factorial();