
// ///////////////POWER SOLUTION/////////////////

// function power(base, exponent){
//     if(exponent === 0) return 1;
//     return base * power(base,exponent-1);
// }

// // power(2,0) // 1
// // power(2,2) // 4
// // power(2,4) // 16


// /////////////FACTORIAL SOLUTION/////////////

// function factorial(x){
//   if (x < 0 ) return 0;
//   if (x <= 1 ) return 1;
//   return x * factorial(x-1);
// }

// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040


// //////////PRODUCT OF ARRAY SOLUTION///////////////

// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

// // productOfArray([1,2,3]) // 6
// // productOfArray([1,2,3,10]) // 60


// //////////RECURSIVE RANGE SOLUTION/////////////

// function recursiveRange(x){
//   if (x === 0 ) return 0;
//   return x + recursiveRange(x-1);
// }

// // recursiveRange(6) // 21
// // recursiveRange(10) // 55 


// //////////FIBONACCI SOLUTION//////////////////

// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// // fib(4) // 3
// // fib(10) // 55
// // fib(28) // 317811
// // fib(35) // 9227465

///////////////////////////////////////////

// function reverse(str) {
//     if(str.length === 1) { return str; }
//     return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('awesome'));

///////////////////////////////////////////////

function isPalindrome(str){
  if(str.length === 1) { return true; }
  if(str[0] !== str[str.length-1]) { return false; }
  return isPalindrome(str.slice(1, -1));
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false