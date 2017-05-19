/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addDocs } from '../actions/db';
import Landing from '../components/Landing';
import Description from '../components/Description';
import Button from '../components/Button';
import * as Widgets from '../components/Widgets';

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

        return (
            <div >
                <Header/>
                <content>
                    <Landing backgroudImg="/assets/success.png"/>
                </content>
                <Footer/>
            </div>
        );
    }
}