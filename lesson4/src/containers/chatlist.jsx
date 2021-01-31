import React from 'react';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { push } from 'connected-react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { addChat } from '../actions/chatactions';
import { deleteChat } from '../actions/chatactions'


class ChatList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleAddChat = this.handleAddChat.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleDeleteChat = this.handleDeleteChat.bind(this);
    
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) { // Enter
      this.handleAddChat();
    }
  }

  handleAddChat() {
    if (this.state.input.length > 0) {
      this.props.addChat(this.state.input);
      this.setState({ input: '' });
    }
  }

  handleNavigate(link) {
    this.props.push(link);
  }

  handleDeleteChat(chatId) {
    this.props.deleteChat(chatId);
  }

  handleSendMessage(text, author) {
    if (text.length > 0) {
      const {
        chatId, messages,
      } = this.props;
      const messageId = Object.keys(messages).length + 1;

      this.props.sendMessage(messageId, text, author, chatId);

      this.setState({ input: '' });
      const chatWindow = this.chatWindow.current;
      setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      });
    }
  }

  render() {
    const { chats } = this.props;
    
    return (
      <List dense className="chatlist">
        { chats.map((chat, index) => {
          const labelId = `list-secondary-label-${chat.title + index}`;
          return (
            <ListItem key={chat.title} button className="listItemChatLink" onClick={() => this.handleNavigate(`/chat/${index}/`)}>
              <HomeIcon fontSize="small" className="icon" /> 
              <ListItemText id={labelId} primary={chat.title} />
              <IconButton aria-label="delete" onClick={() => this.handleDeleteChat(index)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItem>
          );
        }) }
        <ListItem
          className="addnewchat"
          key="Add new chat"
          onClick={this.handleAddChat}
          style={{ height: '60px' }}
          children={(
            <TextField
              key="textField"
              fullWidth
              name="input"
              placeholder="Добавить новый чат"
              onChange={this.handleChange}
              value={this.state.input}
              onKeyUp={this.handleKeyUp}
            />
          )}
        />
      </List>
    );
  }
}

ChatList.propTypes = {
  chats: PropTypes.array,
  addChat: PropTypes.func,
  deleteChat: PropTypes.func,
  push: PropTypes.func,
};

ChatList.defaultTypes = {
  chats: [],
};

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
