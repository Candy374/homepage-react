/**
 * Created by huangling on 18/5/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const SubmitEmail = (props) => {
    const {btnText, color='orange', length='small'} = props;

    return (
        <div className="input-group">
            <input placeholder="填写邮箱"/>
            <Link to='/form'>
                <Button text={btnText} color={color} radius="square" padding="small" length={length}/>
            </Link>
        </div>
    )
};

export default SubmitEmail;