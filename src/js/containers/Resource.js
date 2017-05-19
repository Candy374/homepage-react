/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {getDocs } from '../actions/db';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

const THEMES = ['全部', '数字营销', '广告投放', '营销内容', '营销技巧', '攻略'];
const TYPES = ['全部', '电子书', '文章', '在线视频', '营销词典'];
const nav = [
    {
        key: 'tag',
        title: '主题',
        items: THEMES
    },
    {
        key: 'type',
        title: '类型',
        items: TYPES
    }
];

const Book = (props) => (
    <div className="block-book">
        <img className="img" src={props.src}/>
        <div className="title">{props.title}</div>
        <div className="desc">{props.tag}</div>
    </div>
);

export default class Resource extends Component {
    componentWillMount() {
        this.state = {
            docs: [],
            filter: {
                by: '',
                key: ''
            }
        };
        getDocs().then(docs => {
            this.setState({
                docs
            })
        })
    }

    filter = (by, key) => this.setState({by, key});

    render() {
        const { docs, by, key } = this.state;

        return (
            <div>
                <Header/>
                <content>
                    <Landing title="免费的营销资源"/>

                    <section className="resource">
                        <div className="resource-category">
                            {nav.map((block, index) =>(
                                <div className="block" key={index}>
                                    <div className="title"> {block.title}</div>
                                    <div className="links">
                                        {block.items.map((item, key) => {
                                            return <div key={key} className="item"
                                                        onClick={() => this.filter(block.key, item)}>{item}</div>;
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="books">
                            {docs.map(doc => {
                                if (key === '全部' || key === doc[by]) {
                                    return (
                                        <Book src={`assets/${doc.img}`} title={doc.title}
                                              tag={doc.tag} key={doc._id}/>
                                    );
                                }
                            })}
                        </div>
                    </section>

                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}