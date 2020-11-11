const express= require('express')

const app =express()

app.get('/',(req,res)=>{
  
    res.send("hi there you are awesome man ")
})
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Listening")
})