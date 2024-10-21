//Date: 10/17/2024
//Spread: is used to spread the elements of any object or array to be usded one by one
//a.spread the elements of array one by one
let nameList = ["Duncan","Windie","Hongbo","Michael"]

console.log(...nameList)   //==>Duncan Windie Hongbo Michael

let user = {
    id: 101,
    name: "Afroj",
    userType: "Paid",
    allowedReview: true,
    balance: "$1000"
}

let addresses = {
    id:101,
    homeAddress: "Somewhere in colorado",
    officeAddress: "Somewhere in Atlanta"
}

//b.spread elements of objects. merge objects
let delivery = Object.assign({}, user, addresses)
//let delivery = {...user,...addresses}
console.log(delivery)

addresses.availabe = "SPM"   //Preserves the immutablity
console.log(delivery)

//then you have to do it again
let delivery1 = {...user,...addresses}
console.log(delivery1)

//2.Rest -

let add = (a=0,b=0,c=0,d=0,e=0) => a+b+c+d+e
let numberList = [1,2,3,4,5]
console.log(add(...numberList))

//if let numberList = [1,2,3,4,5,6]
//console.log(add(...numberList)) ==>15 as well   <usage of spread operator

//c.we can use spread parmeter instead for dynamic count of params

let addMax = function(...restNumberList) {
    let sum = 0

    sum = restNumberList.reduce((prevNum,currNum) =>{
        return prevNum + currNum  //this we will get in prevNum
    },0)          //0 - is initialized as preNum

    return sum;
}

console.log(addMax(...numberList)) //doest the job of passing dynamic and large list to be used in function

console.log(addMax.apply(null, numberList)) //using apply function attached with each function to accept parameters as an array


console.log("-----------------------------Practice part---------------------")
//Questions :
//Spread Operator - 
//create a list of vaccines and print
let vaccines = ["DTP","Hib","Pneumococcal"]
console.log(...vaccines);
//create doctor object and print his qualifications and other details using spread
console.log("------------------")
let doctor = {
    id: 1234,
    dname: "Bob",
    getDetails: {
        Education: "PHD",
        Medical_School: "UMSL",
        State_License: 'true',
        Board_Certification: 'true'
    }
}
const doc1 = {...doctor}
console.log('doc:',doc1)
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
console.log("------------------")
let vaccine = {
    vname: "DTP",
    Doses: 3,
    price: 45
}
const megerObj ={...doctor,...vaccine}
console.log('megerObj: ',megerObj)

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
console.log("------------------")
let arrayOfNums = [1,2,3,4,5,6,7,8,9]

function largesum(a,b,c,...arrayOfNums){
    let total =a+b+c;
    for (const element of arrayOfNums)
        total = total + element;
    return total;
}
console.log(largesum(3,6,1,...arrayOfNums))