import { getMessages, getMembers } from './data';

export default async function getChatLog() {
  const messages = await getMessages();
  const members = await getMembers();
  return Promise.resolve([messages, members]);
};
