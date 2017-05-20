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
    const { onChange, status = 'normal', value, type = 'text', name, onBlur} = props;
    const className = 'input ' + status;
    return <input className={className} onBlur={onBlur} onChange={onChange} value={value} name={name} type={type}/>
};


const LabelRow = (props) => {
    const { title, required, children } = props;
    return (
        <div className="label-input">
            <Label required={required}>{title ? `${title}:` : ''}</Label>
            {children}
        </div>
    )
};

const LabelInput = (props) => {
    const { title, required, error, onChange, onBlur, status, value, name } = props;
    return (
        <LabelRow title={title} required={required}>
            <Input onChange={onChange} onBlur={onBlur}
                   value={value} status={status} name={name}/>
            {error && <span className="error">{error}</span> }
        </LabelRow>
    )
};

const PhoneCode = (props) => {
    const { title, required, onChange, status, value, name } = props;
    return (
        <LabelRow title={title} required={required}>
            <Input onChange={onChange} value={value} status={status} name={name}/>
            <Button radius="square" className='code' padding="small" length="small" text="获取验证码"/>
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