import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useSelector } from "react-redux";
import "./App.css";
import "../../index.css";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.value);

  const searchedContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <div className="container">
      <h1 className="title">Phone book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList list={searchedContacts} />
    </div>
  );
}
