const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send('okay')
})

app.get('/a', (req, res)=> {
    res.send('Hello World')
  })

app.get('/get',(req,res)=>{
    let qs = req.query
    console.log(qs)
    if (qs) {
        res.send(`
            <h2> ${qs.name} </h2>
            <h2> ${qs.friend} </h2>
            <h2> ${qs.colleague} </h2>
          `)
      }else
        res.send(`<h1> Please add query string to the parameter!!! </h1>`)
})
app.listen(3000)

