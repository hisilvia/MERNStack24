// 4th November - 2024 : ES6, eventloop and some spa definitions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil
console.log("1.-----------------------------------------------------------------")
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
];

//a.Get heroes who are not evils
let notEvils = heroes.filter((hero)=>hero.isEvil == false)
console.log(notEvils)

//b.Print Unique family names
let heroesName = heroes.filter((hero)=>hero.name)
console.log(heroesName)


// c. Print Hero Names from given objects, and append sir in each of them before printing
let appendName = heroes.map((hero)=>"Sir "+ hero.name)
console.log(appendName)

// d. Do we have any hero in Marvel Family who is not evil
let isnotEvilInMarvelFamily = heroes.filter((hero)=>hero.family == 'Marvel').some((evil)=>evil.isEvil == false)
console.log(isnotEvilInMarvelFamily)

console.log("2.-----------------------------------------------------------------")
// 2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
// using apply keyword we need to implement.
let numberList = [10,11,12,13,14]
let result = function multiply(...arrOfNums){
    let tempResult = 1;
    tempResult = arrOfNums.reduce((preRes,curRes)=>{
        return preRes * curRes;
    },1)

    return tempResult
}
//console.log(result(...numberList))
console.log(result.apply(null,numberList))

console.log("3.-----------------------------------------------------------------")
// 3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
let lastName = person.userDetails.last
let contactNumber = 9119119110
let personContact = lastName + " " + contactNumber
console.log(personContact)


console.log("4.-----------------------------------------------------------------")
// 4. Give me an example of const data manipulation
//const: we have to initialize the value when we declare it
const constList = {};
//const: we cannot redeclare it again eg.constList = {"name": "Lilly"}; 
// because above we tried to change the address of the const variable, it is not allowed

//But we can use a reference address of constList to change the constList value 
constList.name = "Lilly"
console.log(constList)  //==>output: {name: "Lilly"}


console.log("5.-----------------------------------------------------------------")
// 5. What is the difference between for-of and for-in show with examples
//for in loop iterates over the property name/key for json object with key-values
const fruitObj = {a: "apple", b: "kiwi", c: "banana"}
for (let key in fruitObj)
    console.log(key +": " + fruitObj[key] )

//for of loop iterates over the property values, we usually use this on array instead of an object
// for (let key of fruitObj)
//     console.log(key +": " + fruitObj[key] )
//The above for of loop gets an error because fruitObj is an object. 
const fruit = ["apple","kiwi","banana"]
for (let element of fruit)
    console.log("element: " + element )

console.log("6.-----------------------------------------------------------------")
// 6. Give me an example of bind and write its usage, comparison with arrow function
//we use bind() method to prevent losing 'this'. 
//when a function such as setTimeout() is used to callback, then it loses 'this',
//so we have to use bind() methods.

let committees = {
    studentName : "Bob",
    major : "CS",
    companyName: "ABC",
    visitDate: "2024-9-11",
    getDetails : function(){            
       
        setTimeout(function(){
            console.log(`
                Inside set timeout
                ${this.studentName}
                ${this.major}
                ${this.companyName}
                ${this.visitDate}
            `)
        }.bind(this),2000);
          
        return "function with bind"
    }
}
console.log(committees.getDetails())

//If line 114 does not have '.bind(this),2000, it shows 'undefined'. It means that it is losing 'this' dynamic value

//Compare to arrow function->it uses the context of immediate parent. Without bind() method, we wont lose 'this'
let committees1 = {
    studentName : "Bob",
    major : "CS",
    companyName: "ABC",
    visitDate: "2024-9-11",
    getDetails: function(){            
       
        setTimeout(()=>{
            console.log(`
                Inside set timeout
                ${this.studentName}
                ${this.major}
                ${this.companyName}
                ${this.visitDate}
            `)
        },);

        return "arrow function without bind"
            
    }
}
console.log(committees1.getDetails())


console.log("7.-----------------------------------------------------------------")
// 7. Create an example showing usage of event loop in concurrent execution cycle
//Concurrency means executing multiple tasks at the same time but not necessarily simultaneously.
//when the below code is executing fun1, it also needs to execute fun2.
function fun1(a) {
    let b = 10;
    return fun2(a+b);
}

function fun2(c) {
    let d = 2;
    return c*d;
}
console.log(fun1(3))

console.log("8.-----------------------------------------------------------------")
// 8. create an example showing usage of short hand and default param.

let brand = "Ford"
let owner = "Lilly"
let car = {brand: "Ford", owner: "Lilly"}
//shorthand
let car1 = {brand, owner}
console.log(car1)   //==>{brand: "Ford", owner: "Lilly"}

//default param
function addition(a=0, b=0, c=0) {
    return a+b+c;
}
console.log(addition(1,229))


console.log("9.-----------------------------------------------------------------")
// 9. Create two objects with some properties and merge them using Object method and ES6 way
let luggage = {
    size: "28in",
    color: "green"
}
let ticket = {
    date: "2024-11-2",
    price: 123
}
let friend = {...luggage,...ticket}
console.log(friend)

console.log("10.-----------------------------------------------------------------")
// 10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//map
console.log("----map----")
let map1 = new Map();
map1.set(1,"apple")
map1.set(2,"water")
console.log(map1.get(1))
console.log(map1.size)
console.log(map1.entries())

//set
console.log("----set----")
let set1 = new Set();
set1.add(5);
set1.add(10)
set1.add({name: "Lilly", age: 16})
console.log(set1)
console.log(set1.has(1))
console.log(set1.delete(5))     //return boolean->true
console.log(set1)

console.log("11.-----------------------------------------------------------------")
// 11. Create a promise object that get resloved after two seconds and rejected after three seconds. Also it returns five ES6 features on resolved
function studentInfo() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name: "Lilly",
                grade: 5,
                score: 98
    
            })
        },2000);
    
        setTimeout(()=>{
            reject({
                name: "Unknown",
                grade: 6,
                score: 15
            })
        },3000)
    })
} 

/*
studentInfo.then((data,error)=>{
    console.log("resolve: ",data)
    console.log("reject: ",error)
}).catch((resolve,reject)=>{
    console.log("Catch_resolve: ",resolve)
    console.log("Catch_reject: ",reject)
})
*/

console.log("12.-----------------------------------------------------------------")
// 12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
let numberList1 = [10,11,12,13,14]
let result1 = function multiple(...arrOfNums){
    let tempResult = 1;
    tempResult = arrOfNums.reduce((preRes,curRes)=>{
        return preRes * curRes;
    },1)

    return tempResult
}
console.log(result(...numberList1))

console.log("13.-----------------------------------------------------------------")
// 13. Use the question #11 to build promises using async and await - with multithread

async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await studentInfo()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before second await - blocking thread starts")

    await studentInfo()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After second await - thread executes one by one")
}

asyncCall()


console.log("14.-----------------------------------------------------------------")
// 14. Create an example of generator function of your choice
function* generFunc() {
    let i = 1;
    while (true)
        yield i=i*2;
    
}
const resultOfFun = generFunc()
console.log(resultOfFun.next().value)   //=>2
console.log(resultOfFun.next().value)   //=>4
console.log(resultOfFun.next().value)   //=>8


console.log("15.-----------------------------------------------------------------")
// 15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
//Statelessness: this is non-blocking. Every request is independent from the previous request. 
//              even if this current request is failed, http still can work on the next request.

//Http: it is a bridge between a client and a server. When we visit the website, its browser sends the http a request, 
//      http uses its methods-get,post,put,patch,delete to give the server a response.

//REST: stands for Representational State Transfer. REST API is a stateless, but the application can use stateful
//      component to manage state information. Since it is stateless, it can reduce latency and make the component 
//      interface scalability. It is a good architecture on Microservices.


//spa: single page application loads a single html page and updates when the user interacts with this application.
//      the initial page fetches all necessary information for the application to function.

//classical applications: before 2015 Javascript did not support classical inheritance, but ES6 provides this, we can use a
//      keyword class. It is easier to create associated methods.