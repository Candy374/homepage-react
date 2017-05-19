/**
 * Created by huangling on 15/05/2017.
 */
import React from 'react';

const Button = (props) => {
    const {type = 'default', text, onClick, className } = props;
    let classes = 'btn btn-' + type + ' ' + className;

    return (
        <button className={classes}
                onClick={onClick}>{text}</button>
    )
};

export default Button;