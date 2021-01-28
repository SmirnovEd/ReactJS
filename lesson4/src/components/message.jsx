import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { message } = this.props;
    const classname = `message-bot ${message.author === 'me' ? 'message-me' : ''}`;
    return (
      <div className={classname}>
        <div className="message__author">{message.author}</div>
        <div>{message.text}</div>
        <div className="message__time">{this.time}</div>
      </div>
    );
  }
}

Message.propTypes = {
   message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};