/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

const nav = [
    {
        title: '主题',
        items: ['数字营销', '广告投放', '营销内容', '营销技巧', '攻略']
    },
    {
        title: '类型',
        items: ['电子书', '文章', '在线视频', '营销词典']
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
    render() {
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
                                        {block.items.map((item, key) => <div key={key} className="item">{item}</div>)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="books">
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                            <Book src='assets/resource_cover.png' title="xxxx" tag="ssss" />
                        </div>
                    </section>

                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}