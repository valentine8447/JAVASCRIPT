

let tableArray =[];
let numberOfMultiplication = 7;


for (let i = 0; i <= numberOfMultiplication; i++) {

   let tempArray = [];
   for (let j = 0; j < numberOfMultiplication; j++) {
      tempArray.push(i * j);
   }
tableArray.push(tempArray);
}

console.table(tableArray);

