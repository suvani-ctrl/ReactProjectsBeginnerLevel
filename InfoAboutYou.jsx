import React, { useState } from "react";
import "./style.css"
function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("JohnDoe@gmail.com");
  const [show,setShow] = useState(false)

  return (
    <>
      <label>
        <p>First Name: {firstName}</p>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <p>Last Name: {lastName}</p>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <p>Email: {email}</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Info" : "ShowInfo"}
      </button>

      {show && (
      <div className="styles">
        <h4>
          Your First Name  is {firstName} </h4>
         <h4>Your Last Name  is {lastName}</h4> 
          <h4>Your email is {email}</h4>
          </div>
      )}
    </>
  );
}

export default App;
