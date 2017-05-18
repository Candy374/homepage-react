/**
 * Created by huangling on 15/05/2017.
 */
import React from 'react';

const Button = (props) => {
    const {type = 'default', text, onClick, margin} = props;
    let classes = 'btn btn-' + type;
    if (margin) {
        classes
    }

    return (
        <button className={'btn btn-' + type} onClick={onClick}>{text}</button>
    )
};

export default Button;