/**
 * Created by huangling on 18/5/2017.
 */
import React from 'react';

const SubmitEmail = (props) => {
    const {btnText, type='danger'} = props;

    return (
        <div className="input-group">
            <input placeholder="填写邮箱"/>
            <button className={"btn-" + type}>{btnText}</button>
        </div>
    )
};

export default SubmitEmail;