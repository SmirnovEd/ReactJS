import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Message from './message';

const botAnswers = [
    'Я слушаю!',
    'Ох. хочется в это верить',
    'Это мой любимы вопрос',
    'А я - Алиса. Очень приятно.',
    'Думаю, что вам пока хватит',
    'Чем я могу помочь ?',
    'Как тебя зовут?',
    'Приятно было пообщаться'
   ];

export default class MessageField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textFieldValue: '',
      overloadBot: {
        timer: null,
        tick: 0,
        maxTick: 5,
        text: 'Мрррррррр...',
      },
    };

    this.chatWindow = React.createRef();
  }

  botSendMessage() {
    const { overloadBot } = this.state;
    clearTimeout(overloadBot.timer);
    overloadBot.timer = setTimeout(() => {
      overloadBot.tick = 0;
      this.props.sendMessage(botAnswers[Math.floor(botAnswers.length * Math.random())], 'bot');
    }, 1000);
  }

  handleSendMessage(text, author) {
    if (text.length > 0) {
      this.props.sendMessage(text, author);
      if (author !== 'bot') {
        this.botSendMessage();
      }
      this.setState({ textFieldValue: '' });
      const chatWindow = this.chatWindow.current;
      setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
    }
  }

  handleChange(event) {
    this.setState({ textFieldValue: event.target.value });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      const { textFieldValue } = this.state;
      this.handleSendMessage(textFieldValue, 'me');
    }
  }

  render() {
    const {
      chatId, chats, messages,
    } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId, index) => 
        ( < Message key={ index } message={ messages[messageId] } /> )
        );
    

    return (
      <>
        <div className="message-field" ref={this.chatWindow}>{ messageElements }</div>
        <div className="text-field">
          <TextField
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}
            fullWidth
            margin="normal"
            type="text"
            autoFocus
            placeholder="Введите сообщение..."
            value={this.state.textFieldValue}
          />
          <button onClick={() => this.handleSendMessage(this.state.textFieldValue, 'me')} type="button">Отправить</button>
        </div>
      </>
    );
  }
}

MessageField.propTypes = {
  chatId: PropTypes.number.isRequired,
  chats: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
};
