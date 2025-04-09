import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  try {
    const contactsList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    await writeContacts([...contactsList, ...newContacts]);
    console.log(`${number} contacts have been successfully added.`);
  } catch (err) {
    console.error("Error generating contacts:", err);
  }
};

generateContacts(5);
