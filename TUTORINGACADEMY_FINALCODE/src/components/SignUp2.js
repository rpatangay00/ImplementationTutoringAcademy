import React, { useState } from 'react';
import './SignUp2.css';

function SignUp2Page() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [subjectList, setSubjectList] = useState([ ]);
  const [description, setDescription] = useState([ ]);
  const [availability, setAvailability] = useState([ ]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !age || !role || !phoneNumber || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Password must be at least 8 characters long, contain a number, a symbol and a capital letter");
        return false;
      }

    // TODO: Send sign up request to server
    setSuccess(true);
  };

  var subList;
  if(role == "Tutor") {
    subList = <div>
    <label className="text-gray-200"> Subject List (seperated by comma): 
      <input type="text" value={name} onChange={(e) => setSubjectList(e.target.value)} /> 
    </label>
    <label className="text-gray-200"> About Me (Please by succinct): 
        <input type="text" value={name} onChange={(e) => setDescription(e.target.value)} /> 
    </label>
    <label className="text-gray-200"> Availability (Format: "DD/MM/YYYY HH:MM to HH:MM"): 
        <input type="text" value={name} onChange={(e) => setAvailability(e.target.value)} /> 
    </label>
    </div>;
  } else {
    subList = <div></div>;
  }

  return (
    <div>
      <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
    
    <div className="SignupPage">
      
      {success ? (
        <div>
          <h1>Registration successful!</h1>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Role: {role}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        <div>
          <h1>Sign Up</h1>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <label className="text-gray-200">
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="text-gray-200">
              Age:
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <label className="text-gray-200">
              Tutor or Student:
              <select value={role} onChange={(e) => setRole(e.target.value)} className="text-gray-200">
                <option value="" className="text-gray-200"></option>
                <option value="Tutor">Tutor</option>
                <option value="Student">Student</option>
              </select>
            </label>
            {subList}
            <label className="text-gray-200">
              Phone Number:
              <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <label className="text-gray-200">
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="text-gray-200">
              Password: (Encrypted and safely stored on our servers with SHA-512 Encryption)
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign Up</button>
          </form>
          <div className="testimonials">
            
  {/* <div className="testimonial">
    <p className="testimonial-text">"I highly recommend this tutoring service. My child's grades have improved significantly since starting lessons!"</p>
    <p className="testimonial-author">- John Smith</p>
  </div> */}
  {/* <div className="testimonial">
    <p className="testimonial-text">"I am so grateful for the support and guidance of my tutor. They helped me achieve my academic goals and gain confidence in my abilities."</p>
    <p className="testimonial-author">- Emily Johnson</p>
  </div>
  <div className="testimonial">
    <p className="testimonial-text">"The tutors are knowledgeable, professional, and really care about their students. I couldn't be happier with the service!"</p>
    <p className="testimonial-author">- Michael Williams</p>
  </div>
   */}

</div>


        </div>
      )}
    </div>
    </div>
  );
}

export default SignUp2Page;
