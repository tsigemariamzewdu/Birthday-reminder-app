import React, { useEffect, useState } from 'react';
import { fetchBirthdays } from '../../api';
import "../BirthdayList/birthdaylist.css"


function BirthdayList() {
const [birthdays,setBirthdays]=useState([])
const [filteredBirthdays,setFilteredBirthdays]=useState([])
const [showToday,setShowToday]=useState(false)


    const today = new Date();
    const todayMonth = today.getMonth() + 1; // Months are zero-indexed
    const todayDay = today.getDate();
    

    useEffect(()=>{
        const  getBirthdays=async()=>{
            try{
                const{data}=await fetchBirthdays();
                setBirthdays(data);
                setFilteredBirthdays(data)

            }catch(error){
                console.error("error fetching birthdays",error)
            }
        } ;getBirthdays();
    },[])
    const handleShowTodayBirthdays = () => {
      const todayBirthdays = birthdays.filter((birthday) => {
        const birthDate = new Date(birthday.date_of_birth); // Parse ISO string into a Date object
        const birthMonth = birthDate.getMonth() + 1; // Months are zero-indexed, so add 1
        const birthDay = birthDate.getDate();
    
        return birthMonth === todayMonth && birthDay === todayDay;
      });
    
      setFilteredBirthdays(todayBirthdays);
      setShowToday(true); // Show today's birthdays
    };
    
    
    
      // Handle showing all birthdays again
      const handleShowAllBirthdays = () => {
        setFilteredBirthdays(birthdays);
        setShowToday(false); // Show all birthdays again
      };
  return (
    <div>
    <h2> Birthdays</h2>
    <div>
        <button onClick={handleShowAllBirthdays}>show all birthdays</button>
        <button onClick={handleShowTodayBirthdays}>show today's birthday</button>
    </div>
    <ul>
        {filteredBirthdays.length > 0 ? (
          filteredBirthdays.map((birthday) => (
            <li key={birthday.id}>
              {birthday.name} - {birthday.date_of_birth}
            </li>
          ))
        ) : (
          <p>No birthdays today!</p>
        )}
      </ul>
    </div>
  )
}

export default BirthdayList