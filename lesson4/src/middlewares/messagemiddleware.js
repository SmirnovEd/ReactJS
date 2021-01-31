import { SEND_MESSAGE, sendMessage } from '../actions/messageactions';
import { blinkChat } from '../actions/chatactions';

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

export default store => next => action => {
  switch (action.type) {
  case SEND_MESSAGE: {
    if (action.author === 'me') {
      setTimeout(() => {
        store.dispatch(blinkChat(action.chatId, true));

        setTimeout(() => store.dispatch(blinkChat(action.chatId, false)), 200);
        store.dispatch(
          sendMessage(Object.keys(store.getState().messageReducer.messages).length + 1,
            botAnswers[Math.floor(botAnswers.length * Math.random())], 'bot',
            action.chatId),
        );
      }, 1000);
    }
  }
  }

  return next(action);
};
