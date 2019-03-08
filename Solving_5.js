// function sameFrequency(num1, num2){
//   let arr1 = num1.toString();
//   let arr2 = num2.toString();
//   if(arr1.length !== arr2.length) { return false; }    
//   var obj = {};
//   for(let i=0; i<arr1.length; i++){
//       obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
//   }
//   for(let i=0; i<arr2.length; i++){
//       if(!obj[arr2[i]]){
//           return false;
//       } else { obj[arr2[i]]--; }
//   }
//   return true;
// }

// console.log(sameFrequency(341, 143));

// function areThereDuplicates(){
//     var obj = {};
//     for (var i = 0; i < arguments.length; i++) {
//         if(!obj[arguments[i]]) { obj[arguments[i]]=1; }
//         else { return true; }
//     }
//     return false;
    
// }

// console.log(areThereDuplicates('a','b','c','a'));

// function areThereDuplicates(...args){
//     args.sort((a, b) => a > b);
//     let start = 0, next = 1;
//     while(next < args.length){
//         if(args[start] === args[next]) { return true; }
//         start++; next++;
//     }
//     return false;
// }

function areThereDuplicates() {
   return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates('a','b','c','a'));