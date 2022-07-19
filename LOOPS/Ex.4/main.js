myTable = [];

let row =3;
let col =5;

for (let i = 0; i < row; i++) {
    myTable.push([]);
    for(let cell = 0; cell < col; ++cell) {
myTable[i].push('row ${i} col ${cell}');
    }

}
console.table(myTable);