import "./reserveTutorscr.css"

import React, { useState } from 'react';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

function ReserveTutorPage() {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  // hard-coded list of available tutors and their availability
  const tutors = [
    {
      id: 1,
      name: 'Martin Smithers - Integral Calculus',
      availability: {
        Monday: ['10:00 AM', '11:00 AM', '12:00 PM'],
        Tuesday: ['2:00 PM', '3:00 PM', '5:00 PM'],
        Wednesday: ['11:00 AM', '12:00 PM', '1:00 PM'],
      },
    },
    {
      id: 2,
      name: 'Layla Arwa - Integral Calculus',
      availability: {
        Monday: ['1:00 PM', '2:00 PM', '3:00 PM'],
        Wednesday: ['9:00 AM', '10:00 AM', '11:00 AM'],
        Friday: ['3:00 PM', '4:00 PM', '5:00 PM'],
      },
    },
    {
      id: 3,
      name: 'Jones White - Linear Algebra',
      availability: {
        Tuesday: ['10:00 AM', '11:00 AM', '12:00 PM'],
        Thursday: ['1:00 PM', '2:00 PM', '4:00 PM'],
        Friday: ['10:00 AM', '11:00 AM', '12:00 PM'],
      },
    },
    {
      id: 4,
      name: 'Chloe Ku - Linear Algebra',
      availability: {
        Sunday:['3:00 PM'],
        Tuesday: ['10:00 AM', '11:00 AM', '12:00 PM'],
        Thursday: ['2:00 PM', '3:00 PM', '5:00 PM'],
        Friday: ['10:00 AM', '11:00 AM', '12:00 PM'],
      },
    },
  ];

  function handleTutorChange(event) {
    const tutorId = parseInt(event.target.value);
    setSelectedTutor(tutors.find(tutor => tutor.id === tutorId));
    setSelectedDate(null);
    setSelectedTime(null);
    setAvailableTimes([]);
  }

  function handleDateChange(moment) {
    setSelectedDate(moment.toDate());

    // get availability for selected tutor and date
    const day = moment.format('dddd');
    const tutorAvailability = selectedTutor.availability[day] || [];
    setAvailableTimes(tutorAvailability);
  }

  function handleTimeChange(event) {
    setSelectedTime(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // submit the form data to the server
    console.log('Submitting form with the following data:');
    console.log(`Selected tutor: ${selectedTutor.name}`);
    console.log(`Selected date: ${selectedDate}`);
    console.log(`Selected time: ${selectedTime}`);

    // reset the form
    setSelectedTutor(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setAvailableTimes([]);
  }
  return (
    <div>
      <h1>Reserve a Tutor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tutor-select">Select a tutor:</label>
          <select id="tutor-select" onChange={handleTutorChange}>
            <option value="">Select a tutor</option>
            {tutors.map(tutor => (
              <option key={tutor.id} value={tutor.id}>
                {tutor.name}
              </option>
            ))}
          </select>
        </div>
        {selectedTutor && (
          <div>
            <label htmlFor="date-time-select">Select a date:</label>
          <DateTime id="date-time-select" onChange={handleDateChange} timeFormat={false} />
            {selectedDate && (
              <div>
                <h2>This tutor's available times on {selectedDate.toLocaleDateString()}:</h2>
                <ul>
                  {availableTimes.map(time => (
                    <li key={time}>
                      <input
                        type="radio"
                        id={time}
                        name="time"
                        value={time}
                        required
                        onChange={handleTimeChange}
                      />
                      <label htmlFor={time}>{time}</label>
                    </li>
                  ))}
                </ul>
                <button type="submit" disabled={!selectedTime}>Submit</button>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
  
                  }
export default ReserveTutorPage;








// using the API Code




/* import "./reserveTutorscr.css"


import React, { useState } from 'react';

function ReserveTutorPage() {
  const [formData, setFormData] = useState({
    tutor_id: '',
    student_id: '',
    date: '',
    subject_id: '',
    time: '',
    duration: '',
    status: 'Incomplete'
  });

  const [errorMessage, setErrorMessage] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send reservation data to API endpoint
    fetch('https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/Create/reservations', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ body: formData }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create reservation');
        }
        // Reservation created successfully
        alert('Reservation created!');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="form-container">
      <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
      <h2>Reserve a Tutor</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="tutor_id">Tutor ID:</label>
        <input type="number" id="tutor_id" name="tutor_id" value={formData.tutor_id} onChange={handleInputChange} required />

        <label htmlFor="student_id">Student ID:</label>
        <input type="number" id="student_id" name="student_id" value={formData.student_id} onChange={handleInputChange} required />

        <label htmlFor="date" className="text-gray-200">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} required className="text-gray-800"/>

        <label htmlFor="subject_id">Subject ID:</label>
        <input type="number" id="subject_id" name="subject_id" value={formData.subject_id} onChange={handleInputChange} required className="text-gray-800"/>

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} required className="text-gray-800"/>

        <label htmlFor="duration">Duration (hours):</label>
        <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} required />

        <button type="submit">Reserve Tutor</button>
      </form>
    </div>
  );
}

export default ReserveTutorPage;

*/