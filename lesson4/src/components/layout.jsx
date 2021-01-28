import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import Header from "./header";
import MessageField from './messagefield';
import ChatList from './chatlist';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        chats: [
            { id: '1', title: 'Chat-1', messageList: [0, 1] },
            { id: '2', title: 'Chat-2', messageList: [] },
            { id: '3', title: 'Chat-3', messageList: [] },
        ],
        messages: [
            {
            text: 'Привет',
            author: 'me',
            },
            {
            text: 'Как дела?',
            author: 'bot',
            },
        ],
        };

        this.chatWindow = React.createRef();
    } 
  
  sendMessage(text, author) {
    if (text.length > 0) {
      const { messages } = this.state;
      const { chatId } = this.props;
      const messageId = Object.keys(messages).length + 1;

      this.setState(state => {
        const chatsTemp = state.chats.map((chat, index) => {
          if (index === chatId) {
            chat.messageList.push(messageId);
          }
          return chat;
        });
        return {
          messages: { ...messages, [messageId]: { text, author } },
          chats: chatsTemp,
        };
      });

    }
  }

  render() {
    const { chatId } = this.props;
    const { chats, messages } = this.state;
    return (
        <Grid className="grid-container" container alignItems="stretch">
            <Hidden only={['xs', 'sm']}>
            <Grid className="chatList" item xs={2}>
                <ChatList chats={chats} />
            </Grid>
            </Hidden>
            <Grid className="messageField" item xs>
                <Header title={chats[chatId].title } className="header_bg" />
                <MessageField chatId={chatId} chats={chats} messages={messages} sendMessage={this.sendMessage.bind(this)} />
            </Grid>
        </Grid>
    );
  }
}

Layout.propTypes = {
    chatId: PropTypes.number,
  };
  
Layout.defaultProps = {
    chatId: 1,
  };