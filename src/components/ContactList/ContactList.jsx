import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice";

import { selectNameFilter } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );


  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
