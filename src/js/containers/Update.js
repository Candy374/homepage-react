/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import TryNow from '../components/TryNow';

export default class Update extends Component {
    render() {
        return (
            <div>
                <Header/>
                <content>
                    <section className="landing">
                        <img className="background" src="/assets/sub_banner_bg.png" />
                            <div className="title">产品更新</div>
                            <div className="desc">我们一直在进步...</div>
                    </section>

                    <section className="update-info margin-vertical-large">
                        <div className="time-line-2">
                            <div className="stamp left">
                                <span className="time">2017.04</span>
                                <div className="text-block">
                                    <div className="title">DM Hub V0.41更新</div>
                                    <p>公司网站与微页面流量统计新增饼图展示与数据导出，流量与来源统计更直观，界面更人性，方便用户统计各渠道流量
                                        来源并进行转化统计分析
                                    </p>
                                    <br/>
                                    <p>
                                        每天晚上，系统都会自动刷新一遍重算智能群组内的客户统计结果。但是如果你需要查看当前客户的统计结果，你现在
                                        可以选择群组进行手动刷新。!!请务必注意，现在智能群组不再是实时的。在「分析」与「自动流程」功能都涉及智能
                                        群组，因此在操作相关功能前，请先对智能群组进行手动刷新。
                                    </p>

                                    <div className="row direction-row align-start">
                                        <div className="avatar">
                                            <img src="./assets/btn_icon_01.png"/>
                                            <div className="name">Eric</div>
                                            <div className="job-title">开发工程师</div>
                                        </div>
                                        <div>
                                            <div className="sub-title">智能群组-支持离线查询</div>
                                            <p>每天晚上，系统都会自动刷新一遍重算智能群组内的客户统计结果。但是如果你需要查看当前客户的统计结果，你现在
                                                可以选择群组进行手动刷新。!!请务必注意，现在智能群组不再是实时的。在「分析」与「自动流程」功能都涉及智能
                                                群组，因此在操作相关功能前，请先对智能群组进行手动刷新。
                                                每天晚上，系统都会自动刷新一遍重算智能群组内的客户统计结果。但是如果你需要查看当前客户的统计结果，你现在
                                                可以选择群组进行手动刷新。!!请务必注意，现在智能群组不再是实时的。在「分析」与「自动流程」功能都涉及智能
                                                群组，因此在操作相关功能前，请先对智能群组进行手动刷新。</p>
                                            <a className="more arrow2">点击查看微页面功能说明</a>
                                            <div className="like">
                                                <i className="cl-icons icon-zan"></i>
                                                <span className="num">201</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="stamp left disabled">
                                <span className="time">2017.04</span>
                                <div className="text-block">
                                    <div className="title">DM Hub V0.41更新</div>
                                    <div className="desc">获得年度最佳数字营销平台奖</div>
                                    <a className="more arrow">了解更多</a>
                                </div>
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