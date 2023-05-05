import React, { useState } from "react";

const TutorSignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [netId, setNetId] = useState("");
  const [mainSubject, setMainSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [subjectIds, setSubjectIds] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await createTutorAccount();
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const createTutorAccount = async () => {
    try {
      const response = await fetch("/api/Create/tutors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          net_id_fk: netId,
          mainsubject: mainSubject,
          grade: grade,
          subjectids: subjectIds.split(",").map(Number),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const rawResponseText = await response.text();
      console.log("Raw response text:", rawResponseText);

      const data = JSON.parse(rawResponseText);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="TutorSignUp">
      <h1>Sign Up as a Tutor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="netId">Net ID</label>
          <input
            type="text"
            id="netId"
            value={netId}
            onChange={(e) => setNetId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mainSubject">Main Subject ID</label>
          <input
            type="number"
            id="mainSubject"
            value={mainSubject}
            onChange={(e) => setMainSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" disabled={isSubmitting || isSuccess}>
            {isSuccess ? "Success!" : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TutorSignUpForm;