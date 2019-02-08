import React, { Component } from "react";

class Message extends Component {
  render() {
    const { big, children: message } = this.props;
    return big ? <h1>{message}</h1> : <h5>{message}</h5>;
  }
}

class MessageApp extends Component {
  render() {
    return (
      <div>
        <Message big={true}>Good morning!</Message>
        <Message big>Good day!</Message>
        <Message>Good night!</Message>
      </div>
    );
  }
}

export default MessageApp;
