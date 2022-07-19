let prize = prompt("Insert a number between 0 and 10");
prize = Number();

let message = "My selection";

switch (prize) {
    case 0:
    case 1:
        message = message + "coins";
        break;
    case 2:
        message += "bear";
    break;
    case 3:
    case 4:
    case 5:
    case 6:
        message = message + "lolipop";
        break;
    case 7:
        message = message + "bottle";
        break;
        default:
            message = "selected a wrong number";
            break;
}
console.log(message);