import React from 'react';
// import "./index.css";
import Home from './routes/Home'
import TutorDirectory from './routes/TutorDirectory'
import InfoTutor from './routes/InfoTutor'
import MySchedule from './routes/MySchedule'
import ReserveTutor from './routes/ReserveTutor'
import { FavoriteContextProvider } from './components/FavoriteContext';
import MyFavorites from './routes/MyFavorites';
import TutorSignUpForm from './components/TutorSignUpForm';

import {Route, Routes} from "react-router-dom"
import Login2 from './routes/Login2';
import SignUp2 from './routes/SignUp2';



function App() {
  return (
    <>
        <FavoriteContextProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tutor-directory" element={<TutorDirectory/>}/>
      <Route path="/infotutor" element={<InfoTutor/>}/>
      <Route path="/myschedule" element={<MySchedule/>}/>
      <Route path="/reservetutor" element={<ReserveTutor/>}/>
      <Route path="/TutorSignUp/*" element={<TutorSignUpForm />} />
      <Route path="/favorites" element={<MyFavorites/>}/>
      <Route path="/Login2" element={<Login2/>}/>
      <Route path="/SignUp2" element={<SignUp2/>}/>


    </Routes>
    </FavoriteContextProvider>
    </>
  );
}

export default App;
