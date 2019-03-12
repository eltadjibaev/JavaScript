
///////////////POWER SOLUTION/////////////////

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


/////////////FACTORIAL SOLUTION/////////////

function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}

console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040


//////////PRODUCT OF ARRAY SOLUTION///////////////

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}


//////////RECURSIVE RANGE SOLUTION/////////////

function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}


//////////FIBONACCI SOLUTION//////////////////

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}