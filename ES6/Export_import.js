//Date: 10/18/2024  1.Shorthand.js, 2.TemplateLiteral.js 3.Export_import.js
//3.export, import keywords are used to export and import the properties, functions, classes from 1 module to another module
//if we are importing from node library we will directly import from the module name
//eg. import("react"),
//when we import from the local modules (file or a file with many features) then we need to pass the absolute path
//eg.shorthand     --->let {AnimalSoundsES6} = import from "./shorthand";    //file extension is optional

//our file is -- user.js
//a. without {}  -->default
//default - import : it is imported without brackets {} and with the name of file
import constant from "./constant";

//b. with {}
//named imports can be imported many but should always be in brackets
import { pie, printUser } from "./constant";

//c.ddefault and named can be imported togather
import constant, { pie, printUser } from "./constant";
//d. the same name in a different files using alias
//to import same name data/property/function/class/variable from two different files
// we can use alias
import { pie as dataPie } from "./data";

//e. import all in a file using wild start *
// import all named exports in star / wild card import
import *  as constants from "./constant";

//f. only can have one defalut, defalut don't need {}
//import * as constants from "./constant";
console.log("----")

//constants.pie;
//constants.printUser()


//the other file is constant.js
//default export - generally similar to the name of file and is allowed to be 1 in a file
let constant = 2024.2
export default constant;

//name exports - this can be many from one file
export let pie = "3.141";
export let printUser = (user)=>console.log(user);


//the other file is data.js
//export let pie = "9.452"