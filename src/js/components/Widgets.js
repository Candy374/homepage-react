/**
 * Created by huangling on 19/5/2017.
 */
import React from 'react';
import Button from './Button';

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


const LabelRow = (props) => {
    const { title, required, children } = props;
    return (
        <div className="label-input">
            <Label required={required}>{title}</Label>
            {children}
        </div>
    )
};

const LabelInput = (props) => {
    const { title, required, error, onChange, status, value } = props;
    return (
        <LabelRow title={title + ':'} required={required}>
            <Input onChange={onChange} value={value} status={status} />
            {error && <span className="error">{error}</span> }
        </LabelRow>
    )
};

const PhoneCode = (props) => {
    const { title, required, onChange, status, value } = props;
    return (
        <LabelRow title={title + ':'} required={required}>
            <Input onChange={onChange} value={value} status={status} />
            <Button className='code' text="获取验证码"></Button>
        </LabelRow>
    )
};

export {
    Label,
    Input,
    LabelInput,
    PhoneCode,
    LabelRow
}