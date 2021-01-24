import React from 'react';
import "../styles/styles.css";

export default function Mes({ message }) {
    return (
        <>
            <div className= { message.author === 'Робот' ? 'mess-bot' : 'mess'}>
                <div className= { message.author === 'Робот' ? 'message-bot' : 'message'}>
                    <div>{ message.text }</div>
                    <div className='message-sender'>{ message.author }</div>
                </div>
            </div>
       </>
        
    )
}
