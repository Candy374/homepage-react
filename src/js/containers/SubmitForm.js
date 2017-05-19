/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addDocs } from '../actions/db';
import Landing from '../components/Landing';
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
    required: true,
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
    required: true,
    hint: '',
    key: 'company',
    type: 'LabelInput'
}, {
    title: '职位',
    required: true,
    hint: '',
    key: 'jobTitle',
    type: 'LabelInput'
}];

export default class Resource extends Component {
    componentWillMount() {
        this.state = {};
        formData.map(field => this.state[field.name] = '');
    }

    onSubmit = () => {
        const { title, tag, type, img } = this.state;
        addDocs({
            title, tag, type, img
        }, () => {
            console.log('success!')
        })
    };

    render() {
        const { title, type, tag, img } = this.state;

        return (
            <div>
                <Header/>
                <content>
                    <Landing/>
                    <section >
                        {formData.map(field => {
                            const Comp = Widgets[field.type];

                            return (
                                <Comp {...field} onChange={(e) => this.setState({[field.name]: e.target.value})}/>
                            );
                        })}
                        <Button type='primary' onClick={this.onSubmit}>提交</Button>
                    </section>
                </content>
                <Footer/>
            </div>
        );
    }
}