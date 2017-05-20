/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {addDocs} from '../actions/db';
import Landing from '../components/Landing';
import {markdown} from 'markdown';
import * as Widgets from '../components/Widgets';
const Row = Widgets.LabelRow;
import Detail1 from '../containers/ResourceDetail1'
import Detail2 from '../containers/ResourceDetail2'

import {docForm} from '../constants/docForm';
export default class Resource extends Component {
    componentWillMount() {
        this.state= {
            submiting: false
        };
        docForm.map(field => this.state[field.name] = '');
        this.state.detailType = 'detail'
    }

    isReadyForSubmit = () => {
        let invalid = false;
        docForm.find(field => {
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


    updateValue = (e, field, error) => {
        field.error = error;
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = () => {
        this.setState({submiting: true});
        const {title, tag, type, img, fileName, size, content = '', detailType} = this.state;
        addDocs({
            title, tag, type, img, fileName, size, content, detailType
        }).then(() => {
            alert('保存成功！');
            this.setState({submiting: false});
        });
    };

    render() {
        const { tag, content = '', detailType, submiting} = this.state;
        const disabled = !this.isReadyForSubmit();

        return (
            <div>
                <Header/>
                <content>
                    <Landing/>
                    <section className="direction-row">
                        <div className="form">
                            {docForm.map(field => {
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
                                <Button disabled={disabled || submiting} length="large" spacing="4"
                                        className="submit-btn"
                                        onClick={this.onSubmit}
                                        text="提交"/>
                            </Row>
                        </div>

                        <div className="preview markdown">
                            {detailType == 'detail' ?
                                <Detail1 {...this.state} content={markdown.toHTML(content)} tags={[tag]} preview/>
                            : <Detail2 {...this.state} content={markdown.toHTML(content)} tags={[tag]} preview/>
                            }
                        </div>
                    </section>
                </content>
                <Footer/>
            </div>
        );
    }
}