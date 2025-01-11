const express = require('express')     //import package
const app = express()                  //initializing the express application

const defaultRoutes = require("./Routes/defaultRoute")
const userRoutes = require("./Routes/userRoute")
const productRoute = require("./Routes/productRoute")
const cartRoute = require("./Routes/cartRoute")
const cors  = require('cors')


//we can have multiple express applications running in our single project
const adminApp = express()         //initialzing the express application
const userApp = express()
const productApp = express()
const cartApp = express()

//assume we have multiple sessions: user, product, cart

//const router = express.Router({})

//cors - will be used as middleware to bypass at root level or individual api level to allow cross origin access
app.use(cors());

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
/*
app.use('/static', express.static('public')) //localhost:9000/static/alert_info.js
          public folder contains two files: index.html and alert-info.js
          since i did not create this public folder, ignore this line statement
*/
//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 


//application mounting 
app.use("/admin",adminApp)

adminApp.get("/hello",(req, res)=>{
  console.log(req)
  res.send("This response comes from Admin App")
})

app.use("/user", userApp)
userApp.use("/", userRoutes);//redirecting all the calls having user in it to user router

//app.use("/nodeapi", nodeapiApp)
app.use("/product", productApp)
productApp.use("/", productRoute);

app.use("/cart", cartApp)
cartApp.use("/", cartRoute);



app.use("/",defaultRoutes)

//app.use("/assign", assignApp)

//star or wild card operator
app.get('*', function (req, res) {
    res.send('API is not ready yet')
})

console.log('API is listening at port 9000')
app.listen(9000)



//create an api to read data via query parameter and save that information to a file on the server
