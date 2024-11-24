import React, { useState } from 'react'
import {addBirthday} from "../../api"
import "./addbirthdaylist.css"
function AddBirthdayForm() {
  const [name,setName]=useState("");
  const [dateOfBirth,setDateOfBirth]=useState('')

  const handleSubmit=async(e)=>{
e.preventDefault();
try{
  await addBirthday({name,date_of_birth:dateOfBirth})
  alert ("birthday added")
  setName("")
  setDateOfBirth('')
}catch(error){
  console.error("erro adding birthday ")
}
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className='add'> Add Birthday</h2>
      <input type="text" 
      placeholder='Name'
      value={name}
      onChange={(e)=>
        setName(e.target.value)
      }
      required/>
      <input type="date"
      value={dateOfBirth}
      onChange={(e)=>setDateOfBirth(e.target.value)} 
      required/>
      <button  className="add-btn"
      type='sumbit'>Add</button>
    </form>
   
  )
}

export default AddBirthdayForm