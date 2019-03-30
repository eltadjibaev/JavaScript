// function sumZero(arr) {
//     var left = 0, right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0){
//             right--;
//         } else {
//             left++;
//         }
        
//     }
// }

///////////////////////////////////////////////////////

// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));

function maxSubarraySum(arr, limit) {
    if (arr.length < limit) { return null; }
    var sum = 0;
    for (let i = 0; i < limit; i++) {
        sum += arr[i];
    }
    var max = sum;
    for (let i = limit; i < arr.length; i++) {
        sum = sum - arr[i-limit] + arr[i];
        max = Math.max(sum, max);
    }
    return max;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));