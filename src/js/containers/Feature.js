/**
 * Created by huangling on 18/5/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';
import { Link } from 'react-router-dom'
import {
    featureDesc,
    features
} from '../constants/feature'


const SectionGroup = ({ title, desc, blocks, id, tryNow }) => (
    <div className="section-group">
        <span className="hash" id={id}/>
        <section className="description">
            <div className="title row">{title}</div>
            <div className="desc">{desc}</div>
        </section>

        <section className="figure">
            <figure>
                <img src={`../assets/${id}_concept.png`} srcSet={`../assets/${id}_concept.png 2x`}/>
            </figure>
        </section>

        <section className="category justify-between direction-row">
            {blocks.map(({ title, desc, icon }, index) => (
                    <div className="block align-start" key={index}>
                        <i className={'cl-icons icon-' + icon}></i>
                        <div className="title">{title}</div>
                        <div className="desc">{desc}</div>
                    </div>
                )
            )}
        </section>

        <div className="row">
            <Link className="btn btn-big arrow" to="/form">{tryNow}</Link>
        </div>
    </div>
);

export default class Feature extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.hash != this.props.location.hash) {
            this.scrollTo();
        }
    }

    scrollTo = (id) => {
        console.log('scorll to ' + id)
    };

    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname}/>
                <content>
                    <Landing title="对于做营销，我们很有用， 甚至还有点好用" id="people">
                        <div className="row">
                            {features.map(({ anchor, img, text }, index) => (
                                <a className="block" href={anchor} key={index}>
                                    <figure>
                                        <img src={`../assets/${img}.png`}/>
                                    </figure>
                                    <div className="desc">{text}</div>
                                </a>
                            ))}
                        </div>
                    </Landing>
                    {featureDesc.map((feature, index) => <SectionGroup key={index} {...feature}/>)}
                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}