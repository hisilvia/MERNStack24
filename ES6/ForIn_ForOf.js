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
