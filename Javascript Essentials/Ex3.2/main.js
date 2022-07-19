let shoppingList = ["Milk", "Bread"];
console.log(shoppingList);

shoppingList.push("Apple");
console.log(shoppingList);

let BreadIndex = shoppingList.IndexOf("Bread");
shoppingList.splice(BreadIndex, 1, "Bannanas", "Eggs");
console.log(shoppingList);

let lastItem = shoppingList.Pop();
console.log(lastItem);

shoppingList.sort();
console.log(shoppingList);

let MilkIndex = shoppingList.indexOf("Milk");
console.log(MilkIndex);

let BannanasIndex = shoppingList.IndexOf("Bannanas");
shoppingList.splice(BannanasIndex, + 1, 0, "Carots", "Lettuce");

let newshoppingList = ["Juice", "Pop"];

let combinedshoppingList = shoppingList.concat(newshoppingList, newshoppingList);

let lastIndexOfPop = combinedshoppingList.lastIndexOfPop("Pop");

console.log(lastIndexOfPop);


