/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addDocs } from '../actions/db';
import Landing from '../components/Landing';

const THEMES = ['数字营销', '广告投放', '营销内容', '营销技巧', '攻略'];
const TYPES = ['电子书', '文章', '在线视频', '营销词典'];


export default class Resource extends Component {
    componentWillMount() {
        this.state = {
            docs: [],
            tag: '数字营销',
            type: '文章'
        };
    }

    selectType =  (e) => this.setState({ type: e.target.value });
    selectTag =  (e) => this.setState({ tag: e.target.value });
    setTitle = (e) => this.setState({ title: e.target.value });
    setImg = (e) => this.setState({ img: e.target.value });

    onSubmit = () => {
        const { title, tag, type, img } = this.state;
        addDocs({
            title, tag, type, img
        }, () => {
            console.log('success!')
        })
    };

    render() {
        const { title, type, tag, img } = this.state;

        return (
            <div>
                <Header/>
                <content>
                    <Landing/>
                    <section>
                        <label><span>标题</span><input value={title} onChange={this.setTitle}/></label>
                        <label><span>描述</span><input/></label>
                        <label><span>摘要</span><input/></label>
                        <label><span>附件</span><input/></label>
                        <label><span>图片</span><input value={img} onChange={this.setImg}/></label>
                        <select name="标签" value={tag} onChange={this.selectTag}>
                            <option value='数字营销'>数字营销</option>
                            <option value="广告投放">广告投放</option>
                            <option value="营销内容">营销内容</option>
                            <option value="营销技巧">营销技巧</option>
                            <option value="攻略">攻略</option>
                        </select>
                        <select name="分类" value={type} onChange={this.selectType}>
                            <option value='电子书'>电子书</option>
                            <option value="文章">文章</option>
                            <option value="在线视频">在线视频</option>
                            <option value="营销词典">营销词典</option>
                        </select>
                        <button onClick={this.onSubmit}>提交</button>
                    </section>
                </content>
                <Footer/>
            </div>
        );
    }
}