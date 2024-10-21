//Date: 10/18/2024  1.Shorthand.js, 2.TemplateLiteral.js 3.Export_import.js
//2.templateLiteral.js
//Template literals are literals delimited with backtick (`) characters,
//allowing for multi-line strings, string interpolation with embedded expressions, 
//and special constructs called tagged templates.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

//Template literal in ES6 is used to create a better implementation of strings, html, json data
//without the need of string separaters, html identifiers and new lines

// `` - use back tick or tild operator and write your string, html, variables etc it will return the data in same struture
// to use objects/variables we should use ${---here the variables---}

let dynVal = 2024;
let animalSoundsES6 = require('./Shorthand')
let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                     "\n Lorem Lipsum Lorem Lipsum " + dynVal + " Lorem Lipsum" +
                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                     "<h1>Header</h1>"+
                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum \n" +
                     JSON.stringify(animalSoundsES6);
console.log(myNormalString)
console.log("**********")


let myTemplateLiteral = `Lorem Lipsum Lorem Lipsum Lorem Lipsum 
                     Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     <h1>Header</h1>
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     ${JSON.stringify(animalSoundsES6)}`;
console.log(myTemplateLiteral)

//exercise : write details about yourself using template literal and 
 // use variable and objects to show the value 
let date = "10/20/2024"
let myObj = {
    "name": "Silvia",
    "favorate": "Cat"
}
let myLiteral = `my information ${JSON.stringify(myObj)} ${date}`
console.log(myLiteral)


