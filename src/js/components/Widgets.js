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
    const { title, required, error, onChange, onBlur, value, name } = props;
    return (
        <LabelRow title={title} required={required}>
            <Input onChange={onChange} onBlur={onBlur}
                   value={value} name={name}/>
            {error && <span className="error">{error}</span> }
        </LabelRow>
    )
};

const LabelLongInput = (props) => {
    const { title, required, onChange, value, name } = props;
    return (
        <LabelRow title={title} required={required}>
            <textarea rows={5} value={value} name={name} onChange={onChange}></textarea>
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

const LabelDropDown = (props) => {
    const { options, onChange, value, name, title, required } = props;
    return (
        <LabelRow title={title} required={required}>
            <div className="options-container">
                <select value={value} name={name} onChange={onChange} className="option">
                    <option value={''}>{''}</option>
                    {options.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
                </select>
            </div>
        </LabelRow>
    )
};

const Select = (props) => {
    let { options, type, multi = false, value, onChange } = props;

    const inputType = multi ? 'checkbox' : 'radio';
    return (
        <div className={inputType + "-container"}>
            {options.map((option, index) => {
                return (
                    <div key={index} style={{flex: 1}}>
                        <label className="select">
                            <input className={inputType} type={inputType} name={props.name} value={option.value}
                                   checked={value == option.value} onChange={(e) => {
                                       e.target.value= option.value;
                                       onChange(e)
                            }}/>
                            <div className={`${inputType}Input`}></div>
                            <div className="option-label">
                                <p>{option.label}</p>
                            </div>
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

const LabelRadio = (props) => {
    const { title, required } = props;
    return (
        <LabelRow title={title} required={required}>
            <Select {...props} />
        </LabelRow>
    )
};

export {
    Label,
    Input,
    LabelInput,
    PhoneCode,
    LabelRow,
    LabelDropDown,
    LabelRadio,
    LabelLongInput
}