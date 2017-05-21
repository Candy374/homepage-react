/**
 * Created by huangling on 21/05/2017.
 */
/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Button from '../../components/Button';
import {submitForm} from '../../actions/db';
import * as Widgets from '../../components/Widgets';
const Row = Widgets.LabelRow;

export default class SubOptionEditor extends Component {
    componentWillMount() {
        this.state = {
            submmiting: false,
            fields: this.props.fields
        };
        this.props.fields.map(field => this.state[field.name] = '');
        this.state.detailType = 'detail'
    }

    isReadyForSubmit = () => {
        let invalid = false;
        this.props.fields.find(field => {
            const value = this.state[field.name];

            if (value instanceof Array) {
                invalid = value.find(v => (v.required && !this.state[v.name]) || (v.valid && !v.valid(v)));
            } else {
                invalid = (field.required && !value) || (field.valid && !field.valid(value));
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
        this.setState({submmiting: true});
        const subKey = [];
        const data = {};
        this.props.fields.forEach(field => {
            if (field.type == 'LabelAddForm') {
                subKey.push(field.name);
            } else {
                data[field.name] = this.state[field.name];
            }
        });

        subKey.forEach(item => {
            const detailItem = this.state[item];
            if (detailItem) {
                data[item] = [];
                detailItem.forEach(f => {
                    const [key, indexStr] = f.name.split('_');
                    const index = indexStr -1;
                    if (!data[item][index]) {
                        data[item][index] = {}
                    }

                    data[item][index][key] = this.state[f.name];
                });
            }
        });

        submitForm('update', data).then(() => {
            alert('保存成功！');
            this.setState({submmiting: false});
        });
    };

    render() {
        const {submmiting} = this.state;
        const disabled = !this.isReadyForSubmit();

        return (
            <content>
                <section className="direction-row">
                    <div className="form">
                        {this.props.fields.map(field => {
                            const Comp = Widgets[field.type];
                            const value = this.state[field.name];

                            if (field.type == 'LabelAddForm') {
                                const subFields = value || [];
                                return (
                                    <div key={field.name}>
                                        <Widgets.LabelButton
                                            title={field.title}
                                            onClick={() => {
                                                const index = 1 + (subFields.length / field.form.length);
                                                const newFields = field.form.map(f => ({
                                                    ...f,
                                                    title: f.title + '_' + index,
                                                    name: f.name + '_' + index
                                                }));
                                                this.setState({
                                                    [field.name]: subFields.concat(newFields)
                                                })
                                            }}
                                        />{
                                        subFields.map(f => {
                                            const SubComp = Widgets[f.type];
                                            const subValue = value.find(v => v.name == f.name).value;
                                            return (
                                                <SubComp {...f} key={f.name}
                                                         error={f.error}
                                                         value={subValue}
                                                         onBlur={(e) => {
                                                             f.error = subValue && f.valid && !f.valid(subValue) && f.hint;
                                                             this.setState({[e.target.name]: e.target.value});
                                                         }}
                                                         onChange={(e) => {
                                                             this.setState({[e.target.name]: e.target.value});
                                                         }}/>
                                            );
                                        })
                                    }
                                    </div>
                                );
                            }
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
                            <Button disabled={disabled || submmiting} length="large" spacing="4"
                                    className="submit-btn"
                                    onClick={this.onSubmit}
                                    text="提交"/>
                        </Row>
                    </div>
                </section>
            </content>
        );
    }
}