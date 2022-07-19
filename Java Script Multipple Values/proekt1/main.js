const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);

theList.pop();
theList.shift();
console.log(theList);

theList.unshift("First");
console.log(theList);

theList.splice(3, 4, "Hello World");
console.log(theList);

 let index = theList.indexOf(true);
 theList[index] = "MIDDLE";
 console.log(theList);

 theList.push("Last");
 console.log(theList);