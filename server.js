const express= require('express')
const bodyParser = require('body-parser')
const app =express()
const mysql=require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'my$077nethmi',
    database: 'file-upload'
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.connect()
app.get('/',(req,res)=>{
    let stmt = `INSERT INTO user(username,password)
            VALUES(?,?)`
    connection.query(stmt,[req.body.username,req.body.password],(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })

})
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Listening")
})