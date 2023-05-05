import React, { useEffect, useState } from 'react';
import TutorCard from './TutorCard';
import axios from 'axios';
import { FavoriteContext } from './FavoriteContext';




const TutorList = () => {
  const [tutors, setTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTutors = async () => {
    try {
      const response = await axios.get(
        "https://x4g0ddpp1f.execute-api.us-east-2.amazonaws.com/prod/show/tutors"
      );
      const apiTutors = response.data.body.map((tutor) => ({
        id: tutor.tutor_id,
        name: `${tutor.first_name} ${tutor.last_name}`,
        subject: tutor.subject,
        grade: tutor.grade,
        isFavorite: false,
      }));
      setTutors(apiTutors);
    } catch (error) {
      console.error("Error fetching tutors:", error);
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTutors();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching tutors: {error.message}</div>;
  }

  return (
    <div className="tutor-list">
      {tutors.map((tutor) => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
};

export default TutorList;
