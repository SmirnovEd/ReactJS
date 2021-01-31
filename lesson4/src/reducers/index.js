import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chatReducer from './chatreducer';
import messageReducer from './messagereducer';

export default history => combineReducers({
  router: connectRouter(history),
  chatReducer,
  messageReducer,
});
