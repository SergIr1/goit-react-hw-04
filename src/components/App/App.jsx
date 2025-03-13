import css from './App.module.css';
import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

const initialContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contactList, setContactList] = useState(() => {
    const savedInitialContact = localStorage.getItem('contacts');

    if (savedInitialContact !== null) {
      return JSON.parse(savedInitialContact);
    }
    return initialContact;
  });
  const [filterValue, setFilterValue] = useState('');

  const addContact = newContact => {
    setContactList(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = contactId => {
    console.log(contactId);
    setContactList(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterValue} onChange={setFilterValue} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

// ======================= hands work =======================

// export default function App() {
//   const [contactList, setContactList] = useState(() => {
//     const savedInitialContact = localStorage.getItem('contacts');

//     if (savedInitialContact !== null) {
//       return JSON.parse(savedInitialContact);
//     }
//     return initialContact;
//   });
//   const [filterValue, setFilterValue] = useState('');

//   const addContact = newContact => {
//     setContactList(prevContact => {
//       return [...prevContact, newContact];
//     });
//   };

//   const deleteContact = contactId => {
//     console.log(contactId);
//     setContactList(prevContact => {
//       return prevContact.filter(contact => contact.id !== contactId);
//     });
//   };

//   const visibleContacts = contactList.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase())
//   );

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contactList));
//   }, [contactList]);

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox value={filterValue} onChange={setFilterValue} />
//       <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//     </div>
//   );
// }

// ======================= /hands work =======================
