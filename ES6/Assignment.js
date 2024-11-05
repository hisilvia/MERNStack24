//1.Promise    Date: 10/21/2024
//Create a student promise object and it should return the resolve and reject data after two seconds
//It should be named as student info
let studentPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name: "Lilly",
            grade: 5,
            score: 98

        })
    },2000);

    setTimeout(()=>{
        reject({
            name: "Unknown",
            grade: 6,
            score: 15
        })
    },1990)
})

studentPromise.then((resolve,reject)=>{
    console.log("resolve: ",resolve)
    console.log("reject: ",reject)
}).catch((resolve,reject)=>{
    console.log("Catch_resolve: ",resolve)
    console.log("Catch_reject: ",reject)
})

let studentCourses = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            CS: "SQL",
            BS: "business",
            ACC: "accounting"

        })
    },2000);

    setTimeout(()=>{
        reject({
            CS: "database",
            BS: "unknow",
            ACC: "financial management"
        })
    },3000)
})


//2.multiPromise.js  Date: 10/22/2024
//create promise of three concurrent sessions of a day and try to resolve and reject them
Promise.allSettled([
    studentInfo,
    studentCourses
]).then((data, error)=>{
    console.log("No need to stop exectution when on promise is failed.", data)
})

//3.asyncAwait.js   Date: 10/22/2024
//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution



// create one set of map using different types of keys and at least show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)

// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function






//4.generatorFunction.js  //Date: 10/22/2024
//no assignment



//5.