/**
 * Created by huangling on 18/5/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom';


const SubmitEmail = (props) => {
    const {btnText, type='danger'} = props;

    return (
        <div className="input-group">
            <input placeholder="填写邮箱"/>
            <Link to='/form' className={"btn btn-" + type}>{btnText}</Link>
        </div>
    )
};

export default SubmitEmail;