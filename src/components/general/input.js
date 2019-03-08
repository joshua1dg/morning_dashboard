import React from 'react';

export default (props) => {
    console.log('this is props: ', props);
    const {label, input} = props
    return (
        <div className="input-field">
            <input type='text' {...input}></input>
            <label htmlFor="">{label}</label>
        </div>
    )
}