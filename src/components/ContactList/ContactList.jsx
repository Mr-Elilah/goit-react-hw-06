import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.value.toLowerCase());

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.number.includes(filter)
  );

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.listItem} key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
}
