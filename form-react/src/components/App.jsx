import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function getContact(e) {
    const { name, value } = e.target;
    setContact((contact) => ({ ...contact, [name]: value }));
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={getContact}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={getContact}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={getContact}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
