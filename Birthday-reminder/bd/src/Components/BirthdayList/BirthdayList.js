import React, { useEffect, useState } from 'react';
import { fetchBirthdays } from '../../api';
import "./birthdaylist.css";

function BirthdayList() {
  const [birthdays, setBirthdays] = useState([]);
  const [filteredBirthdays, setFilteredBirthdays] = useState([]);
  const [showToday, setShowToday] = useState(false);

  const today = new Date();
  const todayMonth = today.getMonth() + 1; // Months are zero-indexed
  const todayDay = today.getDate();

  useEffect(() => {
    const getBirthdays = async () => {
      try {
        const { data } = await fetchBirthdays();
        setBirthdays(data);
        setFilteredBirthdays(data);
      } catch (error) {
        console.error("Error fetching birthdays", error);
      }
    };
    getBirthdays();
  }, []);

  const handleShowTodayBirthdays = () => {
    const todayBirthdays = birthdays.filter((birthday) => {
      const birthDate = new Date(birthday.date_of_birth);
      const birthMonth = birthDate.getMonth() + 1;
      const birthDay = birthDate.getDate();

      return birthMonth === todayMonth && birthDay === todayDay;
    });

    setFilteredBirthdays(todayBirthdays);
    setShowToday(true);
  };

  const handleShowAllBirthdays = () => {
    setFilteredBirthdays(birthdays);
    setShowToday(false);
  };

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container">
      <h2>Birthdays</h2>
      <div className="button-group">
        <button className="btn" onClick={handleShowAllBirthdays}>
          Show All Birthdays
        </button>
        <button className="btn" onClick={handleShowTodayBirthdays}>
          Show Today's Birthdays
        </button>
      </div>
      <ul className="birthday-list">
        {filteredBirthdays.length > 0 ? (
          filteredBirthdays.map((birthday) => (
            <li className="birthday-item" key={birthday.id}>
              <span className="name">{birthday.name}</span>
              <span className="date">{formatDate(birthday.date_of_birth)}</span>
            </li>
          ))
        ) : (
          <p className="no-birthdays">
            {showToday ? "No birthdays today!" : "No birthdays available!"}
          </p>
        )}
      </ul>
    </div>
  );
}

export default BirthdayList;
