// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 ++obj[char];
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

//////////////////////////////////////////////////////////////////

// console.log(charCount('hello'));

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 ++obj[char];
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }


// console.log(charCount('hello'));

// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }


// console.log(charCount('hello'));

// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
