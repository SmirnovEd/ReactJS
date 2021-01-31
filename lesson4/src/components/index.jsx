import React from 'react';
import PropTypes from 'prop-types';


export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, author } = this.props;
    const classname = `message-bot ${author === 'me' ? 'message-me' : ''}`;
    return (
      <div className={classname}>
        <div className="message__author">{author}</div>
        <div>{text}</div>
        <div className="message__time">{this.time}</div>
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
