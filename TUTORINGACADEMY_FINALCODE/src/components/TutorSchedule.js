import React from 'react';
import './TutorSchedule.css';

function ScheduleTutor() {
  return (
    
    <div className="container">
      <div className="schedule-list">
          <h1>TUTOR SCHEDULE</h1>
        <p>Student Name --- Subject --- Complete Date and Time</p>
        <p>Bob Miller --- Integral Calculus --- April 25th, 2023, 1:00 PM</p>
        <p>Mac Ricardo --- Integral Calculus --- May 14th, 2023, 11:00 AM</p>
        <p>Wilson Kand --- Integral Calculus --- May 7th, 2023, 9:00 AM</p>
      </div>
    </div>
  );
}

export default ScheduleTutor;
