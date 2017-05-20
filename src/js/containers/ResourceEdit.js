/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {addDocs} from '../actions/db';
import Landing from '../components/Landing';
import {LabelInput, LabelRow} from '../components/Widgets';

const TYPES = ['电子书', '文章', '在线视频', '营销词典'];


export default class Resource extends Component {
    componentWillMount() {
        this.state = {
            tag: '数字营销',
            type: '文章'
        };
    }

    setValue = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = () => {
        const {title, tag, type, img, fileName, size, content, detailType} = this.state;
        addDocs({
            title, tag, type, img, fileName, size, content, detailType
        }, () => {
            console.log('success!')
        })
    };

    render() {
        const {title, tag, type, img, fileName, size, content, desc, briefs, detailType} = this.state;

        return (
            <div>
                <Header/>
                <content>
                    <Landing/>
                    <section className="form">
                        <LabelInput title="标题" value={title} name="title" onChange={this.setValue}/>
                        <LabelInput title="描述" value={desc} name="desc" onChange={this.setValue}/>
                        <LabelInput title="摘要" value={briefs} name="briefs" onChange={this.setValue}/>
                        <LabelRow title="内容">
                            <textarea rows={5} value={content} name="content" onChange={this.setValue}></textarea>
                        </LabelRow>
                        <LabelInput title="大小" value={size} name="size" onChange={this.setValue}/>
                        <LabelInput title="文件名" value={fileName} name="fileName" onChange={this.setValue}/>
                        <LabelInput title="图片" value={img} name="img" onChange={this.setValue}/>
                        <LabelRow title="标签">
                            <select value={tag} name="tag" onChange={this.setValue}>
                                <option value='数字营销'>数字营销</option>
                                <option value="广告投放">广告投放</option>
                                <option value="营销内容">营销内容</option>
                                <option value="营销技巧">营销技巧</option>
                                <option value="攻略">攻略</option>
                            </select>
                        </LabelRow>
                        <LabelRow title="分类">
                            <select value={type} name="type" onChange={this.setValue}>
                                <option value='电子书'>电子书</option>
                                <option value="文章">文章</option>
                                <option value="在线视频">在线视频</option>
                                <option value="营销词典">营销词典</option>
                            </select>
                        </LabelRow>
                        <LabelRow title="显示类型">
                            <select value={detailType} name="detailType" onChange={this.setValue}>
                                <option value='detail'>模版1</option>
                                <option value="brief">模版2</option>
                            </select>
                        </LabelRow>
                        <LabelRow>
                            <Button type='primary' className="submit-btn"
                                    onClick={this.onSubmit}
                                    text="提交"/>
                        </LabelRow>
                    </section>
                </content>
                <Footer/>
            </div>
        );
    }
}