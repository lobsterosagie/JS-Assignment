// <!-- palindrome -->
// <!-- factorial -->
// <!-- fibonacci -->



// For Palindrome
function palindrome(value) {
 var alpha = /[^A-Za-z0-9]/g;
 value = value.toLowerCase().replace(alpha, '');
 var len = value.length;
 for (var i = 0; i < len/2; i++) {
   if (value[i] != value[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
console.log(palindrome("202"));




// for Factorial
function factorial(num){
    if (num === 0 || num === 1) {
    return 1
    }
    else{ 
        return num * (factorial)(num-1)
}
}
console.log(factorial(3))




// For Fibonacci
function fibonacci(num){
    if(num < 0){
        return "Incorrect Input"
    }
    else if(num == 0){
        return 0
    }
    else if(num == 1 || num == 2){
        return 1
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2)
    }
}
console.log(fibonacci(12))
