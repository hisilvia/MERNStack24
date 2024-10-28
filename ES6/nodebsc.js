//Date: 10/25/2024
//99000+ packages are present to do multiple jobs

console.log("Packages are nothing but the utility modules")

let {log} = require('console');  //using the already installed package-->module.  console is a module
log("This we are printing by using console module!")
/*
log(__dirname)    //gives the absolute path of the directory our file is in
//==>C:\Users\silvi\Desktop\2024training\MERNStack24\ES6

log(__filename)   //gives the absolute path of the directory our file is in with current file name
//==>C:\Users\silvi\Desktop\2024training\MERNStack24\ES6\nodebsc.js

//access global data
let {test} = require('./node')  //need to run the file so that value assigned to global object
log(global.connectionString)

//
//log(process)     -->gives information about the node processes

//callback with data inserted
process.stdin.on('data', data =>{
    process.stdout.write('\n\n ${data.toString().trim()} \n\n')
    process.exit();
})
process.stdin.on('exit', data =>{
    log("we are exiting")
    process.stdout.write('\n\n ${data.toString().trim()} \n\n')
    
})

*/
//REPL - Read Evaluate Print and Loop => type of execution we do with node system
//ctrl+c or ctrl+c twice
let os = require('os')
/*
log(os.cpus())
log(os.hostname())
log(os.machine())
log(os.version())
*/
let path = require('path')
//path
console.log(`The file name is - ${path.basename(__filename)}`);
console.log(`The file name is absolute- ${path.isAbsolute(__dirname)}`);
console.log(`The resolved file name is - ${path.resolve(__filename)}`);
//path.resolve(__filename)  ==>resolve the path in suitable format

let http = require('http')

log(http.METHODS)
log(http.WebSocket)
log(http.request())

//To write our own customized events
const {EventEmitter} = require("events")
EventEmitter.on("request","get", (req, res)=>{
    res.send("Information to be shared with user")
})

//Utility module
const util = require('util')
util.log(path.basename(__filename))
util.log(path).basename(__dirname)
log(util.debuglog())

const v8 = require('v8');
log(v8)

log(v8.getHeapSnapshot())
log(ve.getHeapStatistics())

process.nextTick(()=>{log("Next Tick Called!")})