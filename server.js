const express= require('express')
const bodyParser = require('body-parser')
const app =express()
const mysql=require('mysql')
var connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'bdd779232475d2',
    password: '1b102457',
    database: 'heroku_facc63e981ca242'
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.connect((err)=>{
    
})
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

app.get('/all',(req,res)=>{
    let stmt ="SELECT * FROM user"
    connection.query(stmt,(err,result)=>{
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
    console.log("Listening here")
})