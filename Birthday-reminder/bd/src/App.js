
import './App.css';
import AddBirthdayForm from './Components/AddBirthdayList/AddBirthdayForm';
import BirthdayList from './Components/BirthdayList/BirthdayList';

function App() {
  return (
    <div className="App">
      <h1>Birthday Reminder App</h1>
      <AddBirthdayForm/>
     <BirthdayList/>
    </div>
  );
}

export default App;
