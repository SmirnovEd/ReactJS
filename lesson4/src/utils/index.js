import initStore, { history } from './store';

const { store, persistor } = initStore();

export {
  store,
  persistor,
  history,
};
