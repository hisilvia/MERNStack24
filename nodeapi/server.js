const express = require('express')     //import package
const app = express()                  //initializing the express application

const defaultRoutes = require("./Routes/defaultRoute")

//we can have multiple express applications running in our single project
const adminApp = express()

//assume we have multiple sessions: user, product, cart

//const router = express.Router({})

/*
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sayhtml', function (req, res) {
  res.send(
    `
      <h1> HTML Responses </h1>
      <h2> Must display html info </h2>
    `)
})

app.get('/getfile',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
})

//passing data in url - api: path
//a. query string - ? after the end point then key value pair separted by &
// localhost:3000?name=Jimmy&friend=Christopher
app.get('/query',(req,res)=>{
  //we can react the query string from url by using req - object and req.query property and gives us json object
  let qs = req.query;
  console.log(qs)         //converts into json format dynamically

  //if (qs) 
  //   res.send(qs)
  // else
  //   res.send(`<h1> Please add query string to the parameter!!! </h1>`)
  if (qs) {
    res.send(`
        <h2> ${qs.name} </h2>
        <h2> ${qs.friend} </h2>
        <h2> ${qs.colleague} </h2>
      `)
  }else
    res.send(`<h1> Please add query string to the parameter!!! </h1>`)
  
})

//b. route param - id : in the route path with  be treated as route param and will help us read the values dynamically
// localhost:3000/getuserbyid/id
app.get('/getuserbyid/:id/details/:name',(req, res)=>{
  //we can read the router param from url by using req - object and req.param property and gives us data attached
  let param_id = req.params['id'];
  let param_name = req.params['name'];
  console.log(param_id) 
  if (param_id) {
    //res.send(qs)  
    res.send(`
        <h2>Route Param passed is : ${param_id}</h2>
        <h2>Route Param passed name is : ${param_name}</h2>
      `)
  } else {
    res.send(`<h1>Please add parameter in api route path!!!</h1>`)
  }  
})

app.get('/sayhello', function (req, res) {
    res.send('Say Hello - Hello World')
})

app.get('/getjson', function (req, res) {
  res.json({
    api: "express",
    automated: "yes",
    toolName: "nodemon"
  })
})

app.get('*', function (req, res) {
    res.send('API is not ready yet')
})
*/
console.log('API is listening at port 3000')
app.listen(3000)



//create an api to read data via query parameter and save that information to a file on the server
