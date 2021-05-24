import React, { useState } from "react";
import classes from "./EditContact.css";

const EditContact = (props) => {
  const [editItem, setEditItem] = useState(props.editItem);

  const newObj = { ...editItem };

  function handleSaveName(e) {
    newObj.name = e.target.value;
    setEditItem(newObj);
  }

  function handleSaveLastName(e) {
    newObj.lastName = e.target.value;
    setEditItem(newObj);
  }

  function handleSavePhone(e) {
    newObj.phone = e.target.value;
    setEditItem(newObj);
  }

  return (
    <>
      <input type="text" onChange={handleSaveName} value={editItem.name} />
      <input
        type="text"
        onChange={handleSaveLastName}
        value={editItem.lastName}
      />
      <input type="text" onChange={handleSavePhone} value={editItem.phone} />
      <button onClick={() => props.handleSaveContact(editItem)}>Save</button>
    </>
  );
};

export default EditContact;
