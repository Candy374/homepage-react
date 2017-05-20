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
import { formData } from '../constants/submitForm';

const Row = Widgets.LabelRow;

export default class SubmitForm extends Component {
    componentWillMount() {
        this.state = {
            submitted: false
        };
        formData.map(field => this.state[field.name] = '');
    }

    isReadyForSubmit = () => {
        let invalid = false;
        formData.find(field => {
            const value = this.state[field.name];
            if (field.required && !value) {
                invalid = true;
            }

            if (field.valid && !field.valid(value)) {
                invalid = true;
            }
            return invalid;
        });

        return !invalid;
    };

    onSubmit = () => {
        const {company, jobTitle, email, phone, name} = this.state;
        submitCustomer({
            company, jobTitle, email, phone, name
        }, () => {
            this.setState({submitted: true})
        });
        this.setState({submitted: true})
    };

    updateValue = (e, field, error) => {
        field.error = error;
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const {submitted} = this.state;
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
            const disabled = !this.isReadyForSubmit();
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
                            const value = this.state[field.name];
                            return (
                                <Comp {...field} key={field.name}
                                      error={field.error}
                                      value={value}
                                      onBlur={(e) => {
                                          this.updateValue(e, field, value && field.valid && !field.valid(value) && field.hint)
                                      }}
                                      onChange={(e) => this.updateValue(e, field)}/>
                            );
                        })}
                        <Row>
                            <Link onClick={disabled ? undefined : this.onSubmit}
                                  to={{
                                      pathname: '/form',
                                      search: 'submitted',
                                  }}>
                                <Button disabled={disabled} length="large" spacing="4"
                                        className="submit-btn" text="提交"/>
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