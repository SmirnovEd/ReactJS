import React from 'react';
import Header from './header';
import ChatList from './chatlist';
import MessageField from './messagefield';

export default class Layout extends React.Component {
    render() {
        return ( 
            <div className='layout'>
                <Header />
                <ChatList />
                <MessageField />
            </div>
        );
    }
 }

