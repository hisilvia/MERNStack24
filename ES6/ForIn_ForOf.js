//1.DefaultParam.js      Date:10/09/2024
// ES6 allows us to initialize the parameter at the time of function definition
// this helps us to reduce the logical validations of undefined

function Addition(val1, val2, val3) {
    console.log("val3 = " +val3)
    return val1 + val2 + val3
}
console.log(Addition(1,2,3))     //==> val3=3             ==>6
console.log(Addition(1,2))       //==> val3=undefined     ==>NaN - Not A Number
console.log("---------------------------------------------------------------------")

//=>To fix it->define them as default
function Addition1(val1=0, val2=0, val3=0) {
    console.log("val3 = " +val3)
    return val1 + val2 + val3
}
console.log(Addition1(1,2,3))     //==> val3=3             ==>6
console.log(Addition1(1,2))       //==> val3=0             ==>3

//Summary: its useful to create a student information functional and set some values as default

//2.For/In or For/Of Loop  Date:10/09/2024
//for ->  array[1].key
//foreach -> (this)
//-. loops through length
//-. to access the value we pass key as index for current object array[1].key , (this)

//The collections or Iterables are array of JSON or JSON of JSON
// let ProductList = [{Prod1},{Prod2}]
// for (let index = 0; index < ProductList.length; index++) {
//     const element = ProductList[index];
//     element["productname"]                  //"productname" is a key
// }
console.log("---------------------------------------------------------------------")
//a. for in loop - iterates over the property value, basically meant for json objects with - key values 
//Example 1:
let person = {fname:"John", lname:"Doe", age:25, address : {}}; 
//JSON Document
//ForIn
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {  //This is a check to confirm that key is present else set  the context to current key
        const element = person[key];
        console.log(`${key} ${element}`)
        
    }
}
//===>node ForIn_ForOf
//fname John
//lname Doe
//age 25
//address [object object]
console.log("---------------------------------------------------------------------")

//Example 2:
console.log("Example2") 

let arr = [3,5,7]; //{0 : 3, 1 : 5, 2 : 7, newKey : "Sierra"}

arr.push("Eight")
arr.newKey = "Sierra"             //
arr["NextItem"] = "Mark"

console.log(arr)

for (const key in arr) {
        //console.log(key)
        const element = arr[key]; 
        //console.log(element)
        console.log(`${key}  ${element}`)
}
//===>node ForIn_ForOf
//[3, 5, 7, 'Eight', newKey: 'Sierra', NextItem: 'Mark' ]
//0 3
//1 5
//2 7
//3 Eight
//newKey Sierra
//NextItem Mark

console.log("---------------------------------------------------------------------")

//ForOf
//for of loop : Mainely for arrays, iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For Of Loop") 

let cars = ['BMW', 'Volvo', 'Mini']; 

cars[5] = "Toyota"
//cars.newKey = "Range Rover"
cars.push("Range Rover")

//explict key can not be identified via for of loop, for this array indexes are the keys
//so cars[5]="Toyata"==>cars[3] and cars[4] are undefined

for (const element of cars) {
    console.log("element="+ element)
}
//===>node ForIn_ForOf
//element=BMW
//element=Volvo
//element=Mini
//element=undefined
//element=undefined
//element=Range Rover



//Create an example of your own for -
// 1. ForOF Loop
// 2. ForIn loop