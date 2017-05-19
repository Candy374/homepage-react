/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitCustomer } from '../actions/db';
import Landing from '../components/Landing';
import Description from '../components/Description';
import Button from '../components/Button';
import * as Widgets from '../components/Widgets';


const formData = [{
    title: '姓名',
    required: true,
    hint: '',
    key: 'name',
    type: 'LabelInput'
}, {
    title: '手机号码',
    required: true,
    hint: '',
    key: 'phone',
    type: 'LabelInput'
}, {
    title: '验证码',
    required: false,
    hint: '',
    key: 'phoneCode',
    type: 'PhoneCode'
}, {
    title: '邮箱',
    required: true,
    hint: '',
    key: 'email',
    type: 'LabelInput'
}, {
    title: '公司',
    required: false,
    hint: '',
    key: 'company',
    type: 'LabelInput'
}, {
    title: '职位',
    required: false,
    hint: '',
    key: 'jobTitle',
    type: 'LabelInput'
}];

const Row = Widgets.LabelRow;

export default class Resource extends Component {
    componentWillMount() {
        this.state = {
            submitted: false
        };
        formData.map(field => this.state[field.name] = '');
    }

    onSubmit = () => {
        // const { company, jobTitle, email, phone, name } = this.state;
        // submitCustomer({
        //     company, jobTitle, email, phone, name
        // }, () => {
        //     this.setState({submitted: true})
        // })

        alert(1)
        this.setState({submitted: true})
    };

    render() {
        let content;
        alert(this.state.submitted)
        if (this.state.submitted) {
            content = <content>
                <section className="submmit-success">

                </section>
            </content>
        }
        content = (
            <content>
                <Landing/>
                <Description
                    title="填写以下信息，免费试用我们的产品"
                    desc="我们题山山水水xxxxxx"
                />
                <section className="form">
                    {formData.map(field => {
                        const Comp = Widgets[field.type];

                        return (
                            <Comp {...field} value={this.state[field.name]}
                                  onChange={(e) => this.setState({[field.name]: e.target.value})}/>
                        );
                    })}
                    <Row>
                        <Button type='primary' className="submit-btn"
                                onClick={this.onSubmit}
                                text="提交"/>
                    </Row>
                </section>
            </content>
        );

        return (
            <div >
                <Header/>
                {content}
                <Footer/>
            </div>
        );
    }
}