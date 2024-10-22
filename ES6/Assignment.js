//1.Promise
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