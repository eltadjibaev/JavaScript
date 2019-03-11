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

// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// console.log(areThereDuplicates('a','b','c','a'));

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
  
// }

// function isSubsequence(str1, str2){
//     if(str1.length === 0) { return true; }
//     else if(str2.length === 0) { return false; }
//     if(str1[0] === str2[0]) { return isSubsequence(str1.slice(1), str2.slice(1)); }
//     return isSubsequence(str1, str2.slice(1));
// }

// console.log(isSubsequence("abc", "abracadabra"));

// function maxSubarraySum(arr, limit) {
//     if (arr.length < limit) { return null; }
//     let sum = 0;
//     for (var i = 0; i < limit; i++) {
//         sum+=arr[i];
//     }
//     let max = sum;
//     for (var i = limit; i < arr.length; i++) {
//         sum = sum - arr[i-limit] + arr[i];
//         max = Math.max(sum, max);
//     }
//     return max;
// }

// console.log(maxSubarraySum([100, 200, 300, 400, 500], 2));

function minSubArrayLen(nums, sum){
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;
    
    while(start < nums.length){
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        } else if(total >= sum){
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        } else { break; }
    }
    
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));