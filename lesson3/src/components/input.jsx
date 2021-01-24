import React, { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Input({ onAddMessage }) {
    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onAddMessage(value);
        setValue('');
    }, [onAddMessage, value]);
    
    
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div>
                <TextField id="standard-basic" label="Сообщение" onChange={handleChange} value={value}/>
                <Button variant="contained" color="primary" type="submit">
                        Отправить сообщение
                </Button>
            </div>
        </form>
    )
}