/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing from '../../components/Landing';
import PreviewEditor from './PreviewEditor'
import { editLinks } from '../../constants/header';

export default class Resource extends Component {
    componentWillMount() {
        this.state= {
            submiting: false
        };
    }

    render() {
        const { tag, content = '', detailType, submiting} = this.state;

        return (
            <div>

                <Landing>
                    <div className="row">
                        <nav id="nav">
                            {
                                editLinks.map((link, index) =>{
                                    return (
                                        <div className={'nav-item'} key={index} to={link.to}>{link.label}</div>
                                    )
                                })
                            }
                        </nav>
                    </div>
                </Landing>
                <PreviewEditor/>
                <Footer/>
            </div>
        );
    }
}