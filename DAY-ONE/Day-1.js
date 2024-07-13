//DAY 1: Variables and Data Types
//Activity [1]: Variable Declaration
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 21
console.log("value of the variable num is: "+ num)

//Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let string = "Vaishal"
console.log("value of the variable string is: "+ string)

//Activity [2]: Constant Declaration
//Task 3: Declare a variable using const, assign it a boolean, and log the value to the console.

const boolean = true
console.log("value of the variable boolean is: "+ boolean)

//Activity [3]: Data Types
//Task 4: Create variables of different data types(number, string, boolean, object, array) log each variable's type using the typeof operator.

const array =  ["array 1", "array 2", "array 3"]
const object = {name:"Vaishal" ,age:14}
console.log("type of variable num is: {"+typeof num+"}")
console.log("type of variable string is: {"+typeof string+"}")
console.log("type of variable boolean is: {"+typeof boolean+"}")
console.log("type of variable object is: {"+typeof object+"}")
console.log("type of variable array is: {"+typeof array+"}")

//Activity [4]: Reassigning Variables
//Task 5:  Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let num1 = 14
console.log("value of the variable num1 is: "+ num1)
num1 = 21
console.log("value of the reassigned variable num1 is: "+ num1)

//Activity [5]: Understanding const
//Task 6: Try reassigning a variable declared with const  and observe the error.

const num2 = 21
//const num2 = 14 //error : Cannot redeclare block-scoped variable 'num2'.ts(2451)

//Feature Request
//Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

console.log("type of variable num is: {"+typeof num +"} value of the variable num is: "+ num)
console.log("type of variable string is: {"+typeof string+"} value of the variable string is: "+ string)
console.log("type of variable boolean is: {"+typeof boolean+"} value of the variable boolean is: "+ boolean)
console.log("type of variable object is: {"+typeof object+"} value of the variable object is: ", object)
console.log("type of variable array is: {"+typeof array+"} value of the variable array is: "+ array)

//Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const  when it comes to reassignment.

//reassigning for let
try{
    let num3 = 14
    console.log("value of the variable num3 is: "+ num3)
     num2 = 21
    console.log("value of the reassigned variable num3 is: "+ num3)
}
catch(e){
    console.log("the variable num3 is not reassignable because "+e.message)
}

//reassigning for const
try{
    const num4 = 14
    console.log("value of the variable num4 is: "+ num4)
     num4 = 21
    console.log("value of the reassigned variable num4 is: "+ num4)
}
catch(e){
    console.log("the variable num4 is not reassignable because "+e.message)
}

//END OF DAY 1 CHALLENGE !!
//CHAI CODE 🍵
console.log("END OF DAY 1 CHALLENGE, CHAI CODE 🍵 - CODED {/} 🧑‍💻 BY 😎Vaishal😎")

