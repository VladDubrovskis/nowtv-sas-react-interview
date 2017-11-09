import React from 'react';
import dateFormatter from './dateFormatter';

const Message = ({ avatar, email, timestamp, message, fullName }) => {
  return (
      <div className="message">
        <div className="message-avatar">{avatar ? <img src={avatar} /> : ''}</div>
        <div className="message-timestamp">{ dateFormatter(timestamp) }</div>
        <div className="message-email">{ email }</div>
        <div className="message-name">{ fullName }</div>
        <div className="message-text">{ message }</div>
      </div>
  );
};

export default Message;