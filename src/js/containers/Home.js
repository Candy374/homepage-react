/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Category from '../components/Category';
import Button from '../components/Button';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Footer/>
            </div>
        );
    }
}