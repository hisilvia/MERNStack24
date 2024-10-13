//ECMAScript 2015 is also known as ES6 and ECMAScript 6.
//1. DataFile.js -Date:10082024
// JS - function, var
// 2015 => JS => ES6 ==> ES.Next
// ES - EcmaScript

//2. Variables.js  -Date:10082024
//Unlike var, Let allows the script to restrict access to the variable to the nearest enclosing block
//and ensures we dont have re-declaration of a variable.

//Const declaration creats a read-only reference to a value.
//Const: are immutable on direct assignments

//a.Declarations and Assignments - same name variable
// var: we can declare and re-declare as many times as we want
// let/const: we can declare once but can not declare again

var newVar = "Somevalue"
var newVar = "Somevalue2"

let newLet = "SomeValue Let"
//let newLet = "Others"       //re-declaration is not allowed
newLet = "Others"             //re-assignment can be done

console.log("newVar="+newVar)
console.log("newLet="+newLet)
//==>node Variables==>newVar=Somevalue2
//                 ==>newLet=Others

const newConst = "SomeConst"
//const newConst = "OthersConst"     //re-declaration is not allowed
//newConst = "OthersConst"           //re-assignment can be done

//Object if
const user = {}  //eg. address [23]
user.name = "Michael"  // eg.[23] =>[26] {name:"Michael"}//we're updating value via reference
console.log(user)      //==> {name: "Michael"} get the value

//Object if
// const user1 = {}  //[23]  //const user=3.141 is an object
// user1 = {name: "Jugue"}   //[24]//not allowed cause constant variable-changed the address
// console.log(user1)        //==>TypeError:Assignment to constant variable


//b. Define and Assign value later
let newLet2;
newLet2 = "Some new Let"    //Assign a value after defination

//const - we need to Assign the value as soon as we define it
//const newConst2; //not allowed - declaration must be initialized -cause error:undefined
const newConst2 = "SomeValue New LET2"        //Only accept

//c. var is functional scope, let and const are lexical <block> scope
{
    var newVar = "Somevalue3"
    let newLet = "Somevalue let"
    const newConst = "Somevalue const"
}
console.log("newVar="+newVar);       //==>newVar=Somevalue3
console.log("newLet="+newLet);       //==>not changed newLet=Others
console.log("newConst="+newConst);   //==>not changed newConst=SomeConst

//d. Hoisting not present for let or const
// let newLet = "SomeValue Let"
// const newConst = "SomeValue Const"
console.log("newLet="+newLet);       //==>not changed newLet=Others
console.log("newConst="+newConst);   //==>not changed newConst=SomeConst


console.log("--------------------------------------1");

//e. Evaluation of let and const are done before passing them to function,
//this is different in comparison to var where the value is evaluated at the time of function execution
var index=1;     //function scoped and evaluated at the time of execution
/*

for (index=1; index<5; index++) {
    console.log("InsideIdx befor setTime = "+index);
    setTimeout(function () {
        console.log("InsideIdx = "+index)
    },1000);
}
console.log("OutsideIdx = "+index);
*/
//==>node Variables
//InsideIdx befor setTime = 1
//InsideIdx befor setTime = 2
//InsideIdx befor setTime = 3
//InsideIdx befor setTime = 4
//OutsideIdx = 5
//InsideIdx = 5
//InsideIdx = 5
//InsideIdx = 5
//InsideIdx = 5
console.log("--------------------------------------2");

for (let index=1; index<5; index++) {
    console.log("InsideIdx befor setTime = "+index);
    setTimeout(function () {
        console.log("InsideIdx2 = "+index)
    },1000);
    //console.log("index="+ index)
}
console.log("OutsideIdx = "+index);
//==>node Variables
//InsideIdx befor setTime = 1
//InsideIdx befor setTime = 2
//InsideIdx befor setTime = 3
//InsideIdx befor setTime = 4
//OutsideIdx = 1
//InsideIdx = 1
//InsideIdx = 2
//InsideIdx = 3
//InsideIdx = 4
console.log("--------------------------------------3");

var j = 1
for (j=1; j<5; j++) {
    // setTimeout(function (jk) {
    //     console.log("InsideIdx = "+jk)
    // }.bind(j),1000);
    // console.log("InsideIdx after set = " + j);

    (function(params) {
        setTimeout(function () {
                console.log("params="+ params) //1,2,3,4 
        }, 3000);
    })(j) //j - is evaluated immediately
}
//==>node Variables
//params = 1
//params = 2
//params = 3
//params = 4
