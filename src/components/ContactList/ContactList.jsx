import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;