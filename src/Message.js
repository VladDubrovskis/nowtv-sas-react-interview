import React from 'react';

const Message = ({ avatar }) => {
  return (
      <div>
        {avatar ? <img src={avatar} /> : ''}
      </div>
  );
};

export default Message;