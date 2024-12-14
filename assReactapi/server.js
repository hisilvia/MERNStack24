const express = require('express')
const cors = require('cors')

const app = express()
const studentApp = express()
const studentRoutes = require("./Routes/StudentRoute")

//cors - will be used as middleware to bypass at root level or individual api level to allow cross origin access
app.use(cors());

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.use("/student", studentApp)
studentApp.use("/", studentRoutes);//redirecting all the calls having user in it to user router

//star or wild card operator
app.get('*', function (req, res) {
    res.send('API is not ready yet')
})

console.log('API is listening at port 8000')
app.listen(8000)