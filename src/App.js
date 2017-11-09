import React, { Component } from 'react';
import './App.css';
import getChatLog from './service';
import Message from './Message';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  async componentDidMount() {
    const messages = await getChatLog();
    this.setState({ messages });
  }

  render() {
    return (
      <div>
        <h1>Messages</h1>
        { this.state.messages.length ? this.state.messages.map(message => <Message key={message.id} {...message} />) : <p>No messages to display</p> }
      </div>
    );
  }
}

export default App;
