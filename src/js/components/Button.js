/**
 * Created by huangling on 15/05/2017.
 */
import React from 'react';

// const color = ['theme', 'white', 'black', 'orange'];
// const type = ['solid', 'blank'];
// const radius = ['square', 'round'];
// const padding = ['large', 'medium'];
// const length = ['large', 'medium', 'small'];
// const spacing = 0;
const Button = (props) => {
    const {
        type = 'solid',
        color = 'theme',
        radius = 'round',
        padding = 'medium',
        length = 'medium',
        spacing = 0,
        text, children, onClick, className='', disabled, isLink } = props;
    let classes = ['btn',
        'btn-' + type,
        'btn-color-' + color,
        'btn-radius-' + radius,
        'btn-padding-' + padding,
        'btn-length-' + length,
        'btn-spacing-' + spacing,
        className
    ];

    if (disabled) {
        classes.push('disabled');
    }

    const finalProps = {...props, className: classes.join(' ')};
    delete finalProps.isLink;

    if (isLink) {
        return <a {...finalProps}>{children}</a>;
    } else {
        return (
            <button className={finalProps.className}
                    onClick={onClick}>{text || children}</button>
        )
    }
};

export default Button;