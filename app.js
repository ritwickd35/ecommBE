const express = require('express')
const app = express()
const port = 7176;

app.get('/', (req,res)=>{
    res.send('<h1>Hello world</h1>')
})

app.listen(port, ()=>{
    console.log(`App started and listening to port ${port}`)
})