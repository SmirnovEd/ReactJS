import React from 'react';

export default function Mes({ message }) {
    return (
       <div>{ message.author } : { message.text }</div>
    )
}
