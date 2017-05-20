/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {submitCustomer} from '../actions/db';
import Landing from '../components/Landing';
import Description from '../components/Description';
import Button from '../components/Button';
import * as Widgets from '../components/Widgets';
import {Link} from 'react-router-dom';

const formData = [{
    title: '姓名',
    required: true,
    hint: '',
    name: 'name',
    type: 'LabelInput'
}, {
    title: '手机号码',
    required: true,
    hint: '',
    name: 'phone',
    type: 'LabelInput'
}, {
    title: '验证码',
    required: false,
    hint: '',
    name: 'phoneCode',
    type: 'PhoneCode'
}, {
    title: '邮箱',
    required: true,
    hint: '',
    name: 'email',
    type: 'LabelInput'
}, {
    title: '公司',
    required: false,
    hint: '',
    name: 'company',
    type: 'LabelInput'
}, {
    title: '职位',
    required: false,
    hint: '',
    name: 'jobTitle',
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
        const { company, jobTitle, email, phone, name } = this.state;
        submitCustomer({
            company, jobTitle, email, phone, name
        }, () => {
            this.setState({submitted: true})
        });
        this.setState({submitted: true})
    };

    render() {
        const { submitted } = this.state;
        let content;

        if (submitted) {
            content = (
                <content>
                    <Landing/>
                    <section className="submmit-success">
                        <img src="/assets/success.png" srcSet="/assets/success.png 2x"/>
                        <div className="title">感谢您的提交，我们的客户成功团队将会在2天内和您取得联系。
                        </div>
                        <Link className="back-to-home" to='/home'>
                            <span className="text">返回首页</span>
                        </Link>
                    </section>
                </content>
            );
        } else {
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
                                <Comp {...field}
                                      value={this.state[field.name]}
                                      onChange={(e) => this.setState({[field.name]: e.target.value})}/>
                            );
                        })}
                        <Row>
                            <Link onClick={this.onSubmit}
                                  to={{
                                      pathname: '/form',
                                      search: 'submitted',
                                  }}>
                                <Button type='primary' className="submit-btn" text="提交"/>
                            </Link>
                        </Row>
                    </section>
                </content>
            );
        }

        return (
            <div>
                <Header type={submitted ? 'primary scrolled' : ''}/>
                {content}
                <Footer/>
            </div>
        );
    }
}