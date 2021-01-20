import React, { useState, useCallback } from 'react';

export default function Input({ onAddMessage }) {
    const [value, setValue] = useState();

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onAddMessage(value);
    }, [onAddMessage, value]);

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={value} />
            <input type='submit' />
        </form>
    )
}