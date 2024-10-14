//1. ArrowFunc.js                  --Date: 10/10/2024
// Arrow Function is new way of writing functions in ES6, which has two important features:a, b
// this is also termed as Fat arrow function because of () before =>
// we don't need function keyword to define the function

//a. Ease of writing - This is a lambda expression and we can write the whole function definition 
// using lambda expression
function Add(a, b) {
    return a+b
}

//if we have no complex logic which requires multiple lines then function can be written in-ine without return
let AddArrow = (a,b)=>a+b

console.log(Add(5,5))              //==>10
console.log(AddArrow(5,5))         //==>10

// multiple lines funtion 
let UserInfo = (name, age)=>{
    return{
        name, age
    }
}

console.log(UserInfo("Random Person",55))    //==>{name: 'Random Person', age: 55 }

//2. Important! This solves the problem of Scope/Context without using bind, by copying the context of immediate parent
//Example 1  regular func + arrow func
/*let User = {
    name : "Hongbo",
    age : 21,
    address : "Somewhere in north America",
    getDetails : function(){            
        console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
            `)

            setTimeout(function(){
                //console.log(this)
                console.log(`
                    Inside set timeout
                    ${this.name}
                    ${this.age}
                    ${this.address}
                    `)
            }, 2000);
    }
}

User.getDetails()
//==>node arrowfunc
//==>  Hongbo
//==>  21
//==>  Somewhere in north Amerian 
//==>         Inside set timeout
//==>         undefined
//==>         undefined
//==>         undefined
//Note: there are three ways that can fix this undefined issue.

//a. arrow function ->//If line 40 is changed into arrow function setTimeout(()=>{  ==>//arrow function uses the context of immediate parent
//==>node arrowfunc
//==>  Hongbo
//==>  21
//==>  Somewhere in north Amerian 
//==>         Inside set timeout
//==>         Hongbo
//==>         21
//==>         Somewhere in north Amerian
console.log("----------------------------------------------------------------------------")

//b. bind() method can help it-undefined that is losing this.--Example 2 below
//Exmaple 2
let User1 = {
    name : "Hongbo",
    age : 21,
    address : "Somewhere in north America",
    getDetails : function(){            
        console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
            `)

            setTimeout(function(){
                console.log(`
                    Inside set timeout
                    ${this.name}
                    ${this.age}
                    ${this.address}
                    `)
            }.bind(this), 2000);
            
    }
}
//With the bind() method, an object can borrow a method from another object.-www.w3schools.com/js/js_function_bind.asp
//why use bind() ->Sometimes the bind() method has to be used to prevent losing this.
//               ->When a function is used as a callback, this is lost. bind method helps this
User1.getDetails()
//==>node arrowfunc
//==>  Hongbo
//==>  21
//==>  Somewhere in north Amerian 
//==>         Inside set timeout
//==>         Hongbo
//==>         21
//==>         Somewhere in north Amerian

//c. using copied context-that instead of using dynamic context
//Or code on line 87-94 is changed into:
// let that = this;              //this - which is parent context is copied into that variable
// setTimeout(function(){
       // Here we are using copied context-that instead of using dynamic context
//     console.log(`
//         Inside set timeout
//         ${that.name}
//         ${that.age}
//         ${that.address}
//         `)
// }, 2000);
//Will get the same result as line 103-109

console.log("----------------------------------------------------------------------------")*/
//Discuss this
let User2 = {
    name : "Hongbo",
    age : 21,
    address : "Somewhere in north America",
    getDetails : ()=>{ //we should avoid using arrow funtion here as parent of all other functions - sets context to global/empty
        console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
            `)

            setTimeout(()=>{
                console.log(this)
                console.log(`
                    Inside set timeout
                    ${this.name}
                    ${this.age}
                    ${this.address}
                    `)
            }, 2000);
    }
}

User2.getDetails()
//==>node arrowfunc
//     undefined
//     undefined
//     undefined
//{}
//       Inside set timeout
//       undefined
//       undefined
//       undefined
//Summary  line 131 getDetails : ()=>{ ==>arrow function is losting this dynamic
//         so we should get back regular func getDetails: function(){}

//This lesson tells two things: arrow function losts this dynamic variable
//                              slove the scope/context without using bind

// repeat and write an arrowfunction to print account information with return, without return
// by creating a account object
console.log("-----Practice----------")
let accountInfo = {
    Id: 453,
    name: "Jacbo",
    address: "709 Wentzville",
    getDetail: ()=>{
        console.log(
            `${this.Id}
             ${this.name}
             ${this.address}
            `
        )
    }

}