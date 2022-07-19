//KREIRAME VARIABLA SO VREDNOST OD NEKOJ BROJ
//KREIRAME 2 VARIABLA SO VREDNOST OD NEKOJ BROJ
//KREIRAME 3 VARIABLA SO NEKOJ OPERATOR EX: "_"ILI "+"
let argumentNumber1 = 12;
let argumentNumber2 = 20;
let argumentOperator = "/";

//KREIRAME FUNKCIJA SO 3 PARAMETRI EX: function imeNaFuncija(param1, param2, param3) {}
function myCalculator(paramNumber1, paramNumber2, paramOperator) {


//vo blockscope treba da napravime switch statement ex:




switch(paramOperator) {

  case "+":
    return paramNumber1 + paramNumber2;
    break;

    case "-":
      return paramNumber1 - paramNumber2;
      break;

case "*":
  return paramNumber1 * paramNumber2;
  break;

  case "/":
    return paramNumber1 / paramNumber2;
    break;




}
}

console.log(myCalculator(argumentNumber1, argumentNumber2, argumentOperator));

console.log(myCalculator(10,20,"+"));
console.log(myCalculator(10,20,"-"));