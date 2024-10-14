//Destructuring.js                  --Date: 10/11/2024
// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array
let sessionsList = ["AWS", "MERNStack", "JAVA"]

let SessionA = sessionsList[0]
let SessionB = sessionsList[1]
let SessionC = sessionsList[2]
//Or let [SessionA, SessionB, SessionC,] = sessionsList

console.log(SessionA)
console.log(SessionB)
console.log(SessionC)
//console.log(Session7) //undefined - if nothing present at array index

//let [Session1, Session2, Session3, Session4, Session5, Session6, Session7] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList


//b. we can use rest param to assign remaing array
// ... - represents rest operator and holds rest of the values in a separate array



//c. Data swapping can be done easily - values are swapped with variables


//2. Object desructuring allows us to read data from objects without multiple initialization

//a. Single object destructuring



//b. Nested Destructuring - we read the data from the nested object




//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 