let myCar = {
    color: "Black",
    make: "Mercedes",
    model: "A170",
    automatic: false
};

console.log(myCar);

let propertyVariable = "color";
myCar[propertyVariable] = "green";

console.log(myCar[propertyVariable]);

propertyVariable = "For Sale";
myCar[propertyVariable] = true;
console.log(myCar.make + " " + myCar.model);
console.log("For Sale" + myCar[propertyVariable]);