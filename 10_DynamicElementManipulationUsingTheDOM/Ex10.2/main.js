let myElement1 = document.getElementById("list");
console.log(myElement1);

let myElement2 = document.getElementById("secTitle");
console.log(myElement2);

let myElement3 = document.getElementById("secParagraph");
console.log(myElement3);

let myList = ["Bananas", "Apples", "Milk", "Chocolate"];
document.getElementById("list").innerHTML = ""; 
myList.forEach(element => {
    document.getElementById("list")
    .innerHTML += "<li>" + element + "</li>";
});