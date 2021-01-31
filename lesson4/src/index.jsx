import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './containers/router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, persistor, history } from './utils';
import './css/styles.css';

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Router />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
