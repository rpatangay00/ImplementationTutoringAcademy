import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from '../components/Navbar';
import TutorSignUpForm from '../components/TutorSignUpForm';

function TutorSignUpPage() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/TutorSignUp/*" element={<TutorSignUpForm />} />
      </Routes>
    </div>
  );
}

export default TutorSignUpPage;