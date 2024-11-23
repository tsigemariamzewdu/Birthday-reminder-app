// const express=require('express')
// const router=express.Router();
// const db=require('../db/connection')

// //to get all the birthdays
// router.get('/',(req,res)=>{
//     const query='SELECT * FROM birthdays';
//     db.query(query,(err,results)=>{
//         if(err){
//             res.status(500).json({error:err.message})
//             console.log("error while fetching data")
//         }else{
//             res.status(200).json(results)
//             console.log("here is the result",results)
//         }
//     })
// }
// )

// // add a new birthday 
// router.post('/', (req, res) => {
//     const { name, date_of_birth } = req.body;
//     const query = 'INSERT INTO birthdays (name, date_of_birth) VALUES (?, ?)';
//     db.query(query, [name, date_of_birth], (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//       } else {
//         res.status(201).json({ message: 'Birthday added!', id: result.insertId });
//       }
//     });
//   });
  
//   module.exports = router;