//Date: 10/28/2024
//To work with file system we have fs - file systemmodule present
//1.
const fs = require('fs')  //no path because fs is a file system from node framework

console.log('The synchronous operation works from here!')

let fileData = fs.readFileSync('./class.js','utf-8');        //This should be a blocking
console.log(fileData)
console.log('The a-synchronous operation ends here!')

let fileData1;
fs.readFile((data, err)=>{
    fileData1 = data + err
    console.log(fileData1)
    console.log(fileData1)
})
console.log('The new a-synchronous operation ends here!')

//2.Writing into a file using write system
let userDetails = {
    name: "Nhan",
    age: 22,
    city: "Somewhere on earth",
    session: "MernStack"
}

//using the async write operation
fs.readFile('Text.json','utf-8',(err, fileData1) => {
    console.log("information"+fileData)
    let writerStream = fs.createWriteStream("Text.json","utf-8");
    console.log(fileData1)
    if (fileData1){

    }else{

    }
})


//Do a practice writing all the data using fs.write(sync async both)