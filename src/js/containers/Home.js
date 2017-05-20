/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';
import {Link} from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname}/>
                <content>
                    <Landing className="home" backgroudImg="banner_bg"
                             title="让营销变得简单" desc="企业一站式营销云"
                    >
                        <Link className="row" to="/form">
                            <div className="btn btn-danger">申请试用</div>
                        </Link>
                    </Landing>

                    <Description
                        desc="Convertlab Digtal Marketing Hub产品，帮助企业全面了解客户，建立基于数据洞察的营销策略，并持续与客户进行个性化的互动，提升客户体验，最终达成商业目标"
                        title="尽在DM Hub解决方案">
                        <div className="row">
                            <div className="btn btn-normal btn-primary margin-horizontal-medium">体验</div>
                        </div>
                    </Description>

                    <section className="category justify-between direction-row">
                        <div className="block">
                            <img src='assets/people.png' srcSet="assets/people.png 2x"/>
                            <div className="title">人&数据</div>
                            <div className="desc">
                                全渠道打通，接入客户的浏览数据、行为数据、消费数据、资料数据、消费相关的商品数据。对接入数据进行建模分析，绘制出每一个客户的360度画像。
                            </div>
                            <a className="more arrow">了解更多</a>
                        </div>
                        <div className="block">
                            <img src='assets/engage.png' srcSet="assets/engage.png 2x"/>
                            <div className="title">内容&交互</div>
                            <div className="desc">通过低使用门栏的内容制作工具，快速生产营销内容和物料，覆盖微信、短信、邮件、微页面等多种形式。用户与内容交互后，数据自动被收集。</div>
                            <a className="more arrow">了解更多</a>
                        </div>
                        <div className="block">
                            <img src='assets/automation.png' srcSet="assets/automation.png 2x"/>
                            <div className="title">策略&自动化</div>
                            <div className="desc">所见即所得的自动流程设计器，可以让你的运营策略简单快速的变成机器可以读懂的命令，从而程序化执行并输出执行报表。大大提高运营效率。</div>
                            <a className="more arrow">了解更多</a>
                        </div>
                    </section>

                    <section className="video margin-vertical-large ">
                        <div className="title">观看视频</div>
                        <div className="desc">中国市场消费者正在发生变化，看DM Hub如何顺应时代为企业带来营销2.0转型升级。</div>
                        <figure>
                            <img src="/assets/play_btn.png"/>
                        </figure>
                    </section>

                    <Description
                        desc="超过100+客户信任我们，选择DM Hub，提升企业数字营销。"
                        title="一个平台，多个行业解决方案">
                    </Description>

                    <section className="example">

                        <div className="line">
                            <label className="desc"><span>5</span></label>
                            <label className="desc"><span>285</span></label>
                            <label className="desc"><span>82,035,771</span></label>
                        </div>

                        <div className="row">
                            <figure>
                                <img src="/assets/indu_financial.png" srcSet="/assets/indu_financial.png 2x"/>
                                <figcaption>金融</figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/indu_shopping.png" srcSet="/assets/indu_shopping.png 2x"/>
                                <figcaption>快销&零售</figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/indu_service.png" srcSet="/assets/indu_service.png 2x"/>
                                <figcaption>服务</figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/indu_car.png" srcSet="/assets/indu_car.png 2x"/>
                                <figcaption>汽车</figcaption>
                            </figure>
                            <figure>
                                <img src="/assets/indu_internet.png" srcSet="/assets/indu_internet.png 2x"/>
                                <figcaption>互联网</figcaption>
                            </figure>
                        </div>
                    </section>

                    <section className="logos">
                        <img src="/assets/logos/logo01.png"/>
                        <img src="/assets/logos/logo02.png"/>
                        <img src="/assets/logos/logo03.png"/>
                        <img src="/assets/logos/logo04.png"/>
                        <img src="/assets/logos/logo05.png"/>
                        <img src="/assets/logos/logo06.png"/>
                        <img src="/assets/logos/logo07.png"/>
                        <img src="/assets/logos/logo08.png"/>
                        <img src="/assets/logos/logo09.png"/>
                        <img src="/assets/logos/logo10.png"/>
                    </section>

                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}