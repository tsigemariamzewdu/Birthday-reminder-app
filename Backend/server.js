const express=require('express')
const cors=require('cors');
const bodyparser=require("body-parser")
const db=require('./db/connection')

const app=express()
const PORT=5000;

// now the middleware
app.use(cors())
app.use(bodyparser.json())



app.get('/birthdays',(req,res)=>{
    const query='SELECT * FROM birthdays';
    db.query(query,(err,results)=>{
        if(err){
            res.status(500).json({error:err.message})
            console.log("error while fetching data")
        }else{
            res.status(200).json(results)
            console.log("here is the result",results)
        }
    })
})
app.post("/birthdays",(req,res)=>{
    const { name, date_of_birth } = req.body;
    const query = 'INSERT INTO birthdays (name, date_of_birth) VALUES (?, ?)';
    db.query(query, [name, date_of_birth], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).json({ message: 'Birthday added!', id: result.insertId });
      }
})
})

// start the server
app.listen(PORT,()=>{
    console.log("server is running at local host 5000")
})


