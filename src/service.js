import { getMessages, getMembers } from './data';

export default async function getChatLog() {
  const messages = await getMessages();
  const members = await getMembers();
  return Promise.resolve(messages.map((message) => {
    const memberDetails = members.find((member) => member.id === message.userId);

    return {
      avatar: memberDetails.avatar,
      email: memberDetails.email,
      fullName: `${memberDetails.firstName} ${memberDetails.lastName}`,
      message: message.message,
      timestamp: message.timestamp,
      userId: memberDetails.id,
      messageId: message.id
    }
  }));

};
