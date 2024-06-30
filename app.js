//Write a JavaScript program to check whether a given positive number is a 
//multiple of 3 or 7.

function multiply(n){
    if(n <= 0){
        return "Input Should Be Positive Number";
    } else if(n % 3 === 0 || n % 7 === 0){
        return true;
    }else{
        return false;
    }
}

var number = 21;
var result = multiply(number);
console.log(result);