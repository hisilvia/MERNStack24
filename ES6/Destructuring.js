//Destructuring.js                  --Date: 10/11/2024
// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array
let sessionsList = ["AWS", "MERNStack", "JAVA"]

let SessionA = sessionsList[0]
let SessionB = sessionsList[1]
let SessionC = sessionsList[2]
//Or let [SessionA, SessionB, SessionC] = sessionsList
//Or let [SessionA, SessionB, SessionC] = ["AWS", "MERNStack", "JAVA"]

console.log(SessionA)
console.log(SessionB)
console.log(SessionC)
//console.log(Session7) //undefined - if nothing present at array index

let [Session1, Session2, Session3, Session4, Session5, Session6, Session7] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList
//console.log(Session7)   //undefined - if nothing present at array index

//b. Use rest param to assign remaing array
// ... - represents rest operator and holds rest of the values in a separate array
let [Session11, Session22, Session33, ...Session] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList
console.log(Session11)      //==>AWS
console.log(Session22)      //==>MERNStack
console.log(Session33)      //==>JAVA
console.log(Session)        //==>['DSA', 'Data Analytics', 'AI-ML']   It's an array

//c. Data swapping can be done easily - values are swapped with variables
let a = "New A", b = "New b";    //semicolon must be here
                                 //when is a semicolon necessary in JS?
                                 //Its optional, but there are certain cases where they are necessary to avoid unexpected behavior:
                                 //a. Multiple Statements on a Single Line -- like line 33
                                 //b. JS automatically adds semicolons where it thinks they should be -- like avoid undefined

[a, b] = [b, a]

console.log(a)             //==>New b
console.log(b)             //==>New a

//2. Object desructuring allows us to read data from objects without multiple initialization

//a. Single object destructuring
let Assessment = {
    Name : "Jugue",
    Standard : "Professional",
    Marks : {
        Java : 10,
        Mernstack : 8,
        ES6 : 9
    }
}

let Name1 = Assessment.Name;
let MERNStack = Assessment.Marks.Mernstack
console.log(Name1)               //==>Jugue
console.log(MERNStack)           //==>8

/*
let {Name, Standard } = Assessment
console.log(Name)                //==>Jugue
console.log(Standard)            //==>Professional
*/

//b. Nested Destructuring - we read the data from the nested object
// e.g. - Reading marks from nested Marks object

let {Name, Marks : {Java, Mernstack, DSA = 9.5 }, Aspiration = "Technical Architect"} = Assessment

console.log("Name = " + Name)                       //==>Name = Jugue
console.log("Mernstack = " + Mernstack)             //==>Mernstack = 8
console.log("DSA = " + DSA)                         //==>DSA = 9.5
console.log("Aspiration = " + Aspiration)           //==>Aspiration = Technical Architect


console.log("-------------------------Practice Part--------------------------------------")
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
let {FirstName, TotalMarks, Subject:{Physics, Chemistry, Language, Ecology=95}} = Student
console.log(FirstName)               //==>Stacy
console.log(TotalMarks)              //==>75%
console.log(Ecology)                 //==>95
console.log("---")

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let [aspiration1, aspiration2, aspiration3, ...aspirations]=[2024,2025,2026,2027,2028,2029,2030]
console.log(aspiration1)
console.log(aspiration2)
console.log(aspiration3)
console.log(aspirations)
console.log("---")

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(p1=0,p2=0,p3=0) {
    return p1*p2*p3
}
console.log(multiply(2,5,6))
console.log(multiply())
console.log("---")

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
console.log("---ForIn---")
let arr = ["apple","orange","banana","tomato","pear"]
arr.push("pomelo")
arr["newval"] = "watermelon"
for (const i in arr) {
        const element = arr[i];
        console.log(`${i}  ${element}`)  
}
console.log("---ForOf---")

for (const element of arr) {
    console.log(element)
}
console.log("---")

//create an example of const where we can update on property of the object, where it says const is mutable
const person = {
    id: 4,
    name: "Lilly",
    address: "Wentzille",
    getDetail: {

    }

}
console.log("---")

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

console.log("---")