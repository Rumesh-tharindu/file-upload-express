const express= require('express')
const bodyParser = require('body-parser')
const app =express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
   
    res.json(
        {username:req.body.username,
        password:req.body.password}
        )
})
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Listening")
})