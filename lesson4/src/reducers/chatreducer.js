import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageactions';
import { ADD_CHAT, DELETE_CHAT} from '../actions/chatactions';

const initialStore = {
  chats: [
    {
      title: 'Chat-1',
      messageList: [0],
      unreadMessage: false,
    },
    {
      title: 'Chat-2',
      messageList: [1],
      unreadMessage: false,
    },
  ],
};

export default (store = initialStore, action) => {
  switch (action.type) {
  case SEND_MESSAGE: {
    return update(store, {
      chats: {
        [action.chatId]: {
          messageList: { $push: [action.messageId] },
        },
      },
    });
  }

  case ADD_CHAT: {
    return update(store, {
      chats: {
        $push: [{ title: action.title, messageList: [], unreadMessage: 0 }],
      },
    });
  }

  case DELETE_CHAT: {
    return update(store, {
      chats: {
        $splice: [[action.chatId, action.chatId]],
      },
    });
  }

  default:
    return store;
  }
};
