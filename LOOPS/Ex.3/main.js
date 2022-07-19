let i = 1;
let myWork = [];
for (let i = 1; i <= 10; i++); {
    //console.log(i);
    myWork.push(
        {
        name: "Lesson " + i,
        
        status: i % 2 === 0  ?  true : false
    
    }
 );
}
console.log(myWork);