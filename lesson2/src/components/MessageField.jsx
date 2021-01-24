import React from 'react';
import Message from './Message';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        console.log("------------constructor");
        this.state = {
              author: 'Я',
              messages: 'Привет! Как дела ?'
        }
      }
    
    handleClick = () => {
       this.setState({ messages: 'Привет! Как дела ?', author: 'Я'});
    };

    componentDidUpdate() {
        console.log('------------componentDidUpdate');
        if (this.state.author === 'Я') { 
            setTimeout(() => this.setState({messages: 'Дела нормально', author: 'Я Робот'}), 1000);
        }
    }
 
    render() {
        const messageElements = (<Message text={ this.state.messages }/>);
        return (
            <div>
                Автор: {this.state.author}
                {messageElements }
                <button onClick={ this.handleClick }>Отправить сообщение</button>
            </div>
        )
    }
 }
 
