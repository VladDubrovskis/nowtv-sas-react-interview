import { getMessages, getMembers } from './data';

export default async function getChatLog() {
  try {
    const [messages, members] = await Promise.all([
      getMessages(),
      getMembers()
    ]);

    return Promise.resolve(
      messages
        .map((message) => {
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
        })
        .sort((message1, message2) => (new Date(message1.timestamp) - new Date(message2.timestamp)))
    );
  } catch (e) {
    // could use some sort of logger - for now thought we just want to know smth bad happened;
    console.log(e);
    return Promise.resolve([]);
  }

};
