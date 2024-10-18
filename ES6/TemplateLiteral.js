//Date: 10/18/2024
//2.templateLiteral.js
//Template literal in ES6 is used to create a better implementation of strings, html, json data
//without the need of string separaters, html identifiers and new lines
let dynVal = 2024;
let animalSoundES6 = require('./Shorthand')
let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                     "\n Lorem Lipsum Lorem Lipsum" +dynVal+ "Lorem Lipsum" +
                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum"
console.log(myNormalString)


//Exercise: write details about yourself using template literal and use variable and objects to show the value
let myTemplateLiteral = `Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                     "\n Lorem Lipsum Lorem Lipsum" +dynVal+ "Lorem Lipsum" +
                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum`;
console.log(myTemplateLiteral)

//3.export, import keywords are used to export and import the properties, functions, classes from 1 module to another module
//if we are importing from node library we will directly import from the module name
//eg. import("react"),
//when we import from the local modules (file or a file with many features) then we need to pass the absolute path
//eg.shorthand     --->let {AnimalSoundsES6} = import from "./shorthand";

//a. without {}


//b. with {}

//c. the same name in a different files using alias


//d. import all in a file using wild start *

//e. only can have one defalut, defalut don't need {}
import * as constants from "./constant";