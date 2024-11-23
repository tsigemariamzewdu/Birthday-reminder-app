import axios from "axios";
const API=axios .create({
    baseURL:"http://localhost:5000",

})
export const fetchBirthdays=()=> API.get('/birthdays');
export const addBirthday=(newBirthday)=>API.post('/birthdays',newBirthday)