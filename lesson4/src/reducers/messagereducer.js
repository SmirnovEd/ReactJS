import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageactions';

const initialStore = {
  messages: {
    0: { text: 'Hi !', author: 'bot' },
    1: { text: 'Welcome!', author: 'bot' },
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
  case SEND_MESSAGE: {
    return update(store, {
      messages: { $merge: { [action.messageId]: { text: action.text, author: action.author } } },
    });
  }

  default:
    return store;
  }
}
