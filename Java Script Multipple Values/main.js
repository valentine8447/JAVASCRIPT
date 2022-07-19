let arr = ["hi there", 5, true];
console.log(arr);
let arr2 = new Array(10);
console.log(arr2);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

let colors = ["red", "green", "blue"];
let boolean = [true, false, false, true];
let emptyArr = [];
console.log("The length of the colors array is: " + colors.length);
console.log("The length of the boolean array is: " + boolean.length);
console.log("The length of the emptyArr is: " + emptyArr.length);

products = ["Milk", "Bread", "Apples"];
console.log("The length of the products array is: " + products.length);

products[1] = "Bannanas";
console.log(products);

let favoriteFruits = ["grapefruit", "lemon", "orange"];
console.log(favoriteFruits);

favoriteFruits.push = ["tangerine"];
console.log(favoriteFruits);

favoriteFruits.splice(2, 0, "fruit1", "fruit2");

let arrNum1 = [1, 2, 3];
let arrNum2 = [4, 5, 6];
let arrNum3 = arrNum1.concat(arrNum2);
console.log(arrNum3);

