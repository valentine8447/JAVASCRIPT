let myString = "I love Javascript";

function replaceVowels(str) {
   let myLowerCaseString = str.toLowerCase();
   let myVowelArray = ["a","e","i","o","u"];
   
   myVowelArray.forEach(element => {
      myLowerCaseString = 
      myLowerCaseString
      .replaceAll(element, myVowelArray.indexOf(element));
   });

   return myLowerCaseString;
}

console.log(replaceVowels(myString));







