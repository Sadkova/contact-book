import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/ContactList";

function App() {
  let [contacts, setContacts] = useState([]);

  function getContact(contact) {
    let newContacts = [...contacts];
    newContacts.push(contact);
    setContacts(newContacts);
  }

  function handleDelete(id) {
    let newContacts = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContacts);
  }

  function setNewContact(contact) {
    let newContact = [...contact];
    setContacts(newContact);
  }

  return (
    <div className="app">
      <AddContact getContact={getContact} />
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        setNewContact={setNewContact}
      />
    </div>
  );
}

export default App;
