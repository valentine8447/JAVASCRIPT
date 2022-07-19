let mojotArej = ["grapefruit", 4, "hello", 5.6, true];

//function printStuff(ele, ind) {
/*console.log("Element ", ele);
console.log("Index ", ind);
}

mojotArej.forEach(printStuff);*/



/*let mojVtorArej = ["squirrel", 5, "Tjed", new Date(), true];


function checkString(x, y) {
    return typeof element === "string";
}

let filtriranArej = mojVtorArej.filter(x => typeof x === "string");
console.log(filtriranArej);*/

// function bobiFilter(nefiltriranArray) {
//    let novAraj = [];
//    for (let i = 0; i < nefiltriranArray.length; i++) {
//       const element = nefiltriranArray[i];
//       if (typeof element === "string") {
//          novAraj.push(element);
//       }
//    }
//    return novAraj;
// }

// let novFiltriranArej = bobiFilter(mojVtorAraj);
// console.log(novFiltriranArej);


//mojotArej.copyWithin(2, 4, 5);
//console.log(mojotArej);





let mojArejSoBrojki = [1,2,3,4,5];

function nasaFunkcijaZaVrakjanjeRezultat(param1, param2, param3) {
   return param1 * 2;
}
console.log(mojArejSoBrojki);

let mapiranArej = mojArejSoBrojki.map(x => x + 3)
console.log(mapiranArej);



function bobiMap(arejSoBrojki) {
    let mapiranArr = [];
 
    for (let i = 0; i < arejSoBrojki.length; i++) {
       const element = arejSoBrojki[i] + 1;
       mapiranArr.push(element);
    }
   
    return mapiranArr;
 }







