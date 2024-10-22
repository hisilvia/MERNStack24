//Date: 10/21/2024
//Promise: The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.

//Promises - in javascript are the objects which help us making the decision on the basis of response object 
// we get promise acts as a wrapper to the actual task that we want to do 
//This wrapper allows us to add statuses and make our process asynchronous

//1.Example - Sign in process to the application :=>
    
//a.AuthenticationAPI(username, password) => {sign-in and return the token (AuthToken)}
//b.AuthorizationAPI(AuthToken) => {create the user session return the userRole}
//c.RedirectionAPI(AuthToken, userRole) => {the premiumum application services or normal services page}
    
//1.Callback - way <when we can't initiate all the calls in parallel>
/*
SignInUser(AuthenticationAPICallback, SignUpUserCallBack, AuthorizationAPI, RedirectionAPI, RedirectToPage) {
    let response = AuthenticationAPICallback(username,password)   //call to server (async)
    if (response == null) {
        SignUpUserCallBack(userObject)
    }else {
        let userRoleData = AuthorizationAPI(response.authToken);  //call to server (async)
        if (userRoleData == null) {
            SignInUser(AuthenticationAPICallback, SignUpUserCallBack, AuthorizationAPI, RedirectionAPI)
        }else {
            let nextPage = RedirectionAPI(response.authToken, userRoleData.userRole);   //call to server (async)
            if (nextPage == null) {
                SignInUser(AuthenticationAPICallback, SignUpUserCallBack, AuthorizationAPI, RedirectionAPI)
            }else {
                RedirectToPage(nextPage.pageLink);
            }
        }
    }
}
*/

//call back hell - situation happens if any of the dependent output are not having the correct status in response

//2. Promise Object - Resolve and reject are main callbacks of js-promise lib and it allows us to add the statuses as well

let authPromise = new Promise((resolve, reject)=>{
/*
    let authToken = AuthenticationAPI(username, password)
        if (authToken != null) {
            resolve({
                tokencode : authToken.token,
                status : authToken.succes,
                msg : authToken.msg
            })            
        } else {           
            reject({
                tokencode : "token failure",
                status : authToken.error,
                msg : authToken.msg
            })
        }

    resolve({
        authToken : "asdas545d3a54das54d3as",
        status : "success immediately",
        msg : "Athentication Successful at server"
    })
*/
    setTimeout(() => {
        resolve({
            authToken : "asdas545d3a54das54d3as",
            status : "success",
            msg : "Athentication Successful at server"
        })
    }, 2000);

    setTimeout(() => {
        reject({
            authToken : "token failure",
            status : "error",
            msg : "Athentication Failed at server - PROD2512"
        })
    }, 2000);
})

console.log("authPromise: ", authPromise)


//how to call this promise?
//authPromise.then()     //result of successful promise - resolved
//  .catch()             //result of failed promise - rejected


//once we get response we can decide to move to next call
authPromise.then((data, error)=>{//result of successful promise - resolved
    console.log("data: ", data) 
    console.log("error: ", error)
}) 
.catch((data, error)=>{ //result of failed promise - rejected
    console.log("data: ", data)
    console.log("error: ", error)
}) 


//Create a student promise object and it should return the resolve and reject data after two seconds
//It should be named as student info