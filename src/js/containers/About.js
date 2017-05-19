/**
 * Created by huangling on 18/5/2017.
 */
/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

const desc1 = [
    'Convertlab营销实验室，最简单的定义就是"营销技术+运营艺术"，通过云端SaaS服务，为您提供一站式营销解决方案。',
    '我们的产品，可以打通各种渠道捕获数据，并从中理解您的客户。在此基础之上，用自动化和个性化的方式与您的客户互动，从而提升客户体验，为企业带来增长。',
];

const desc = [
    '直连客户，建立属于企业自己的流量池。',
    '在直连过程中，建设属于企业自身的用户数据资产。',
    '通过精细化运营，对数据资产进行变现。',
    '衡量一切，建立管理企业营销的科学体系。'
];

export default class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <content>
                    <Landing title="科学和艺术， 在这里汇集" />

                    <Description align='start' vertical="large" title="关于我们" desc={desc1}>
                        <div className="desc row justify-start">
                            我们是专注于营销技术和企业服务的专业团队，曾长期面向全球从事SaaS产品的研发和产品运营。团队来自SAP、Microsoft、IBM、Oracle，以及BAT等公司。
                        </div>
                    </Description>

                    <Description vertical="large" >
                        <div className="time-line">
                            <div className="stamp left">
                                <div className="desc">
                                    <span className="time">2017.04</span>
                                    <div className="text">获得年度最佳数字营销平台奖</div>
                                </div>
                            </div>

                            <div className="stamp right">
                                <div className="desc">
                                    <span className="time">2017.02</span>
                                    <div className="text">来自春晓资本的A轮投资</div>
                                </div>
                            </div>

                            <div className="stamp left">
                                <div className="desc">
                                    <span className="time">2016.12</span>
                                    <div className="text">超过100个付费客户，初步形成面向金融、品牌和零售、服务行业的解决方案。</div>
                                </div>
                            </div>

                            <div className="stamp right">
                                <div className="desc">
                                    <span className="time">2016.08</span>
                                    <div className="text">设立北京、广州、青岛办事处。</div>
                                </div>
                            </div>

                            <div className="stamp left">
                                <div className="desc">

                                    <span className="time">2016.06</span>
                                    <div className="text">发布DM Hub1.0，成为国内第一个覆盖数据、内容、营销自动化、分析的一站式营销云产品。</div>
                                </div>
                            </div>


                            <div className="stamp right">
                                <div className="desc">

                                    <span className="time">2016.03</span>
                                    <div className="text">来自将门创投的Pre-A轮投资</div>
                                </div>
                            </div>

                            <div className="stamp left">
                                <div className="desc">
                                    <span className="time">2015.12</span>
                                    <div className="text">获得第一个付费客户。</div>
                                </div>
                            </div>

                            <div className="stamp right">
                                <div className="desc">

                                    <span className="time">2015.08</span>
                                    <div className="text">从1200多个团队中脱颖而出，入选微软创投加速器第七期。</div>
                                </div>
                            </div>

                            <div className="stamp left">
                                <div className="desc">
                                    <span className="time">2015.07</span>
                                    <div className="text">Convertlab营销实验室在上海正式成立，同事获得天使投资。</div>
                                </div>
                            </div>
                        </div>
                    </Description>

                    <Description align='start' vertical="large" title="我们相信" desc={desc} >
                        <div className="desc row justify-start">
                            Convertlab致力于搭建数字营销枢纽，一站式营销中台。让企业可以从容应对数字营销，让营销变得简单。
                        </div>
                    </Description>

                    <section className="advantage margin-vertical-large">
                        <div className="title justify-start row">为什么选择我们</div>
                        <div className="row align-start list">
                            <div className="block">
                                <i className="cl-icons icon-dengpao"></i>
                                <div className="">
                                    <div className="title">创新</div>
                                    <div className="desc">和我们的客户共同创新，我们更懂中国企业，以及企业营销所面对的外部环境。</div>
                                </div>
                            </div>

                            <div className="block">
                                <i className="cl-icons icon-chanpin"></i>
                                <div className="">
                                    <div className="title">产品</div>
                                    <div className="desc">是国内第一个一站式营销云解决方案，覆盖企业营销所需的各个环节。</div>
                                </div>
                            </div>

                            <div className="block">
                                <i className="cl-icons icon-wangzhanchengxu-"></i>
                                <div className="">
                                    <div className="title">技术</div>
                                    <div className="desc">技术领先，产品融合了我们在大数据、互联网和企业应用三个领域的多年积累和成功经验。</div>
                                </div>
                            </div>

                            <div className="block">
                                <i className="cl-icons icon-huanmeihongdexin"></i>
                                <div className="">
                                    <div className="title">服务</div>
                                    <div className="desc">通过客户成功服务，帮助企业实现最大的商业价值。</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="location margin-vertical-large">
                        <div className="title justify-start row">联系我们</div>

                        <div className="contact">
                            <div className="block">
                                <i className="cl-icons icon-dianhua"></i>
                                <div className="desc">
                                    <div className="title">给我们电话</div>
                                    <div className="text">400 850 9918</div>
                                </div>
                            </div>
                            <div className="block">
                                <i className="cl-icons icon-youjian"></i>
                                <div className="desc">
                                    <div className="title">给我们邮件</div>
                                    <div><a className="text" href="mailto:info@convertlab.com">info@convertlab.com</a></div>
                                </div>
                            </div>

                        </div>

                        <div className="row align-start list">
                            <div className="block">
                                <i className="cl-icons icon-ditu"></i>
                                <div className="title">上海 SHANGHAI</div>
                                <div className="desc">徐汇区乐山路33号1号楼605室</div>
                            </div>

                            <div className="block">
                                <i className="cl-icons icon-ditu"></i>
                                <div className="title">北京 BEIJING</div>
                                <div className="desc">海淀区海淀大街38号银科大厦815室</div>
                            </div>
                            <div className="block">
                                <i className="cl-icons icon-ditu"></i>
                                <div className="title">广州 GUANGZHOU</div>
                                <div className="desc">天河区体育西路103维多利亚广场B座26楼B05室</div>
                            </div>

                            <div className="block">
                                <i className="cl-icons icon-ditu"></i>
                                <div className="title">深圳 SHENZHEN</div>
                                <div className="desc">南山区科技园南区哈工大A606室</div>
                            </div>

                            <div className="block">
                                <i className="cl-icons icon-ditu"></i>
                                <div className="title">青岛 QINGDAO</div>
                                <div className="desc">市北区黑龙江南路2号万科中心C座809室</div>
                            </div>
                        </div>
                    </section>

                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}