import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  const countedContacts = await readContacts();
  return countedContacts.length;
};

console.log(await countContacts());
