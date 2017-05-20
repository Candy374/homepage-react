/**
 * Created by huangling on 15/05/2017.
 */
import React from 'react';

const color = ['theme', 'white', 'black', 'orange'];
const type = ['solid', 'blank'];
const radius = ['square', 'round'];
const padding = ['large', 'medium'];

const Button = (props) => {
    const {type = 'default', text, onClick, className, disabled } = props;
    let classes = ['btn', 'btn-' + type, className];
    if (disabled) {
        classes.push('disabled');
    }

    return (
        <button className={classes.join(' ')}
                onClick={onClick}>{text}</button>
    )
};

export default Button;