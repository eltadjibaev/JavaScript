
// function validAnagram(s, t){
//   if(s.length !== t.length){
//       return false;
//   }

/////////////////////////////////////////////////////////////
  
//   var dict = {};
//   for(let i = 0; i < s.length; i++){
//       if(!dict[s[i]]){
//           dict[s[i]] = 1;
//       } else {
//           dict[s[i]]++;
//       }
//   }
  
//   for(let i = 0; i < t.length; i++){
//       if(!dict[t[i]]){
//           return false;
//       }else {
//           dict[t[i]]--;
//       }
//   }
//   return true;
// }


function validAnagram(s, t){
  if(s.length !== t.length){
      return false;
  }
  
  var lookup = {};
  for(let i = 0; i < s.length; i++){
      lookup[s[i]] ? lookup[s[i]]++ : lookup[s[i]] = 1;
  }
  
  for(let i = 0; i < t.length; i++){
      if(!lookup[t[i]]){
          return false;
      }else {
          lookup[t[i]]--;
      }
  }
  return true;
}
console.log(validAnagram("anagrams", "anagramm"));
