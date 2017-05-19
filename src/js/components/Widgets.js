/**
 * Created by huangling on 19/5/2017.
 */
import React from 'react';

const Label = (props) => {
    const { children, required } = props;
    const className = required ? 'label required' : 'label';
    return <span className={className}>{children}</span>;
};

const Input = (props) => {
    const { onChange, status = 'normal', value, type = 'text'} = props;
    const className = 'input ' + status;
    return <input className={className} onChange={onChange} value={value} type={type}/>
};

const LabelInput = (props) => {
    const { title, required, error, onChange, status, value } = props;
    return (
        <div className="label-input">
            <Label required={required}>{title + ':'}</Label>
            <Input onChange={onChange} value={value} status={status} />
            {error && <span className="error">{error}</span> }
        </div>
    )
};

const PhoneCode = (props) => {
    const { title, required, error, onChange, status, value } = props;
    return (
        <div className="label-input">
            <Label required={required}>{title}</Label>
            <Input onChange={onChange} value={value} status={status} />
            {error && <span className="error">{error}</span> }
        </div>
    )
};

export {
    Label,
    Input,
    LabelInput,
    PhoneCode
}