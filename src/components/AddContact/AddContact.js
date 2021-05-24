import React, { useState } from "react";
import classes from "./AddContact.css";

const AddContact=(props) => {
  let [name, setName] = useState("");

  let [lastName, setLastName] = useState("");

  let [phone, setPhone] = useState("");

  function handleClick() {
    if (!name || !lastName || !phone) {
      alert("Fill in all the fields");
      return;
    }
    const contact = {
      name: name,
      lastName: lastName,
      phone: phone,
      id: Date.now()
    };
    props.getContact(contact);
    setName("");
    setLastName("");
    setPhone("");
  }

  return (
    <div className="add">
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder={"Name"}
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        placeholder={"Surname"}
      />
      <input
        type="text"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder={"Telephone"}
      />
      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
