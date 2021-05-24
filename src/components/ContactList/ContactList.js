import React, { useState } from "react";
import classes from "./ContactList.css";
import EditContact from "../EditContact/EditContact";

const ContactList = (props) => {
  const [editItem, setEditItem] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  function handleEditInputs(index) {
    setEditItem(props.contacts[index]);
    setIsEdit(true);
  }

  function handleSaveContact(newContact) {
    let newContacts = props.contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    props.setNewContact(newContacts);
    setIsEdit(false);
  }

  return (
    <div className="contactList">
      {props.contacts.map((item, index) => {
        return (
          <div className="contactsItem" key={"number-" + index}>
            <div className={isEdit ? "disabled" : "active"}>
              <ul key={item.id} id={item.id}>
                <button onClick={() => props.handleDelete(item.id)}>
                  Delete
                </button>
                <li>{item.name}</li>
                <li>{item.lastName}</li>
                <li>{item.phone}</li>
                <button onClick={(e) => handleEditInputs(index)}>Edit</button>
              </ul>
            </div>
            {isEdit ? (
              <EditContact
                editItem={editItem}
                handleSaveContact={handleSaveContact}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
