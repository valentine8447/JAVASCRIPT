let myTable = [];

let numberOfRows = prompt("enter number of rows");
numberOfRows = Number(numberOfRows);
let numberOfColumns = prompt("enter number of columns");
numberOfColumns = Number(numberOfColumns);


for (let row = 0; row < numberOfRows; row++) {
    myTable.push([]);

    for (let col = 0; col < numberOfColumns; col++) {
        myTable[row].push(`Row ${row} Col ${col}`);
    }
}
console.table(myTable);