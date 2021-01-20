import React from 'react';
import Mes from './Message';
import Input from './input';

export default class MessageField extends React.Component {
    state = { 
        messages: [{ text:'Привет!', author: 'Я'}, { text: 'Как дела ?', author: 'Я' }]
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    componentDidUpdate(prevProps, prevState) {
        const lastAuthor = this.state.messages[this.state.messages.length-1].author;

        if (prevState.messages.length < this.state.messages.length && lastAuthor !== 'Робот') { 
            this.timeout = setTimeout(() => {
                this.handleAddMessage('Я есть Робот :)', 'Робот')
            }, 1200);
        }
    }
 

    RenderMessage = (message, i) => {
        return (
            <Mes message={ message } key={i} />
        )
    }

    handleAddMessage = (text, author = 'Я') => {
        this.setState(state => ({
            messages: [...state.messages, {text, author}]
        }));
    }

    render() {
        return ( 
        <>
            {this.state.messages.map(this.RenderMessage)}
            <Input onAddMessage={this.handleAddMessage} />
        </>
        );
    }
 }
 
