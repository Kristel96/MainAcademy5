let myColor = ["Red", "Green", "White", "Black"];
let allString = myColor.toString();
console.log("1st task: "+allString);

let myColor2 = "qwqwqw";
let checkresult = Array.isArray(myColor2);
console.log("2st task: "+ checkresult);

let emptyArr = [];
emptyArr.push("Hello");
emptyArr.push("World");
emptyArr.unshift("Hi there!");
console.log("3st task: ");
console.dir(emptyArr);

let arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let arr2 = arr1.sort();
console.log("4st task: ");
console.dir(arr2);



let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//V1
let newArray= color.map(concatString);

function concatString(value, index) {
    let num = index+1;
    return num +" choice is "+value;
 }
console.dir(newArray);

//v2

let newArr2 = [];

for( let i =0; i<color.length;i++){
    newArr2.push(i+1 + " choise is " + color[i])
}
console.dir(newArr2);



