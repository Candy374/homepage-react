/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import DownloadResource from '../components/DownloadResource';

const tags = ['Ebooks', '深锐观察'];
const file = '中国营销30年发展史-深度观察II.pdf';
const size = '28.3M';
const title = '中国营销30年发展史-深度观察II';
const content = `
<p>
                            提起广告，人们往往容易把它和“摆噱头”、“吹牛皮”联系在一起。林彪、“四人帮”
                            一伙大搞假左真右，说什么：“广告是资本主义生意经，要它干什么？” “橱窗里摆
                            的都是吃、喝、穿，是在宣扬封、资、修”。在这种思潮的影响下，所有广告统统
                            被砸烂，甚至商店橱窗也统统封闭起来，不见有商品陈列。
                            现在，拨乱反正，为了使社会主义市场丰富多采，对橱窗设计布置已经开始重视起
                            来，但广告是不是都属于“摆噱头”、“吹牛皮”，似乎尚未澄清。

                            我们对于资本主义那种不择手段的盈利，当然是不赞成的，但对于工业发达国家的
                            企业用人少，效率高，会做生意这一点，却不但不能反对，反而需要分析、研究，
                            并加以学习。因此，我认为，对资本主义的生意经要一分为二。要善于吸取它有用
                            的部分，广告就是其中之一。我们有必要把广告当作促进内外贸易、改善经营管理
                            的一门学问对待。

                            - 我们对于资本主义那种不择手段的盈利，当然是不赞成的。
                            - 对于工业发达国家的企业用人少，效率高。
                            - 会做生意这一点，却不但不能反对，反而需要分析、研究，并加以学习。
                            - 要善于吸取它有用的部分，广告就是其中之一。
                        </p>`;
export default class ResourceDetail1 extends Component {
    render() {
        const { tags, fileName, size, title, content} = this.props;
        return (
            <section className="resource-detail">
                <div className="img">
                    <img src="assets/resource_cover.png"/>
                </div>

                <div className="detail">
                    <div className="title">{title}</div>
                    <div className="tags">{
                        tags.map((tag, index)=> <div className="tag" key={index}>{tag}</div>)
                    }</div>
                    <div className="content">
                        {content}
                    </div>
                    <div className="highlight bold">{fileName}</div>
                    <div className="highlight">{size}</div>

                    <DownloadResource />
                </div>

            </section>
        );
    }
}