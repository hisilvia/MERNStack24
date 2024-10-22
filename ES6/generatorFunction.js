//Date: 10/22/2024
//Generator - functions are special type of funtions which can be invoked once and would yield the value
//for as many times as we need
//return - marks the end of execution
//yield - is used to get the data on each function.next() call

function* name(params) {
    yield "First Yield"
    yield "Second Yield"
    yield "Third Yield"
    return
}

let mname = name("no value")

console.log(mname.next())
console.log(mname.next())
console.log(mname.next())
