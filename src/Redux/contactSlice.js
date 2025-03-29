import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../data/contacts.json";
import { nanoid } from "nanoid";
import Contact from "../components/Contact/Contact";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    list: initialContacts,
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = { id: nanoid(), ...action.payload };
      state.list.push(newContact);
    },
    delateContact: (state, action) => {
      state.list = state.list.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, delateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
