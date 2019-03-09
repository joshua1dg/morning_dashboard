import React from 'react';

export default (props) => {
    const { label, input } = props
    return (
        <div className="input-field">
            <input id={props.input.name} type='text' {...input}></input>
            <label htmlFor={props.input.name}>{label}</label>
        </div>
    )
}