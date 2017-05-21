/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {getData } from '../../actions/db';
import Landing from '../../components/Landing';
import Detail1 from './Detail1';
import Detail2 from './Detail2';
import TryNow from '../../components/TryNow';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
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
            },
            doc: null
        };

        this.getDoc(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search != this.props.location.search) {
            this.getDoc(nextProps);
        }
    }

    getDoc = (props) => {
        let id = props.location.search;
        if (id) {
            id = id.substr(1);
            getData('library', id).then(doc => {
                this.setState({doc});
            })
        } else {
            if (this.state.docs.length > 0) {
                this.setState({doc: null});
            } else {
                getData('library', id).then(docs => {
                    this.setState({docs, doc: null});
                })
            }
        }
    };

    filter = (by, key) => this.setState({by, key});

    render() {
        const { docs, by, key, doc } = this.state;

        const filterdDoc = docs.filter(doc => key === '全部' || key === doc[by]);

        let Detail;
        if (doc) {
            doc.tags = [doc.tag];
            Detail = doc.detailType === 'detail' ? Detail1 : Detail2;
        }
        return (
            <div>
                <Header type={doc ? 'primary' : ''}/>
                    <content>
                        <Landing title="免费的营销资源"/>
                        {doc && <Breadcrumb links={
                            [{to: '/library', label: '资源列表'},{label: doc.title}
                        ]}/>}
                        {doc ? <Detail {...doc}/>
                            :
                            <section className="resource">
                                <div className="resource-category">
                                    {nav.map((block, index) => (
                                        <div className="block" key={index}>
                                            <div className="title"> {block.title}</div>
                                            <div className="links">
                                                {block.items.map((item, index) => {
                                                    let className = 'item';
                                                    if (item == key) {
                                                        className += ' active '
                                                    }
                                                    return (
                                                        <div key={index} className={className}
                                                             onClick={() => this.filter(block.key, item)}>
                                                            <span >{item}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={"books " + (filterdDoc.length > 0 ? '' : 'placeholder')}>
                                    {filterdDoc.map(doc => (
                                        <Link to={{
                                            pathname: `/library`,
                                            search: doc.id ? (doc.id + '') : ''
                                        }}

                                              key={doc._id}>
                                            <Book src={`assets/${doc.img}`}
                                                  title={doc.title}
                                                  tag={doc.tag}
                                            />
                                        </Link>
                                    ))}
                                    <img className="placeholder-img" src="assets/placeholder.png"
                                         srcSet="assets/placeholder.png 2x"/>
                                    <div className="placeholder-text">我们正在努力生产中...</div>
                                </div>
                            </section>
                        }
                        <TryNow />
                    </content>

                <Footer/>
            </div>
        );
    }
}