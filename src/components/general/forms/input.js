import React from 'react';

export default (props) => {
    const { label, input, type} = props;
    const {name} = props.input
    return (
        <div className="input-field">
            <input id={name} type={type} className='validate' {...input}></input>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}