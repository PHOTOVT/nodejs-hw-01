import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const addOneContact = async () => {
  try {
    const contactList = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contactList, newContact]);
    console.log("A contact has been successfully added.");
  } catch (error) {
    console.log("Error adding a contact:", error);
  }
};

addOneContact();
