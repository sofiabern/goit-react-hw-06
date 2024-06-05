import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={css["contact-wrapper"]}>
      <div className={css["contact-info"]}>
        <p className={css["contact-text"]}>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p className={css["contact-text"]}>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
    </div>
  );
}

export default Contact;
