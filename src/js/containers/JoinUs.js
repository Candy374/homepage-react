/**
 * Created by huangling on 18/5/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

const Block = (props) => {
    const { icon, title, desc} = props;
    return (
        <div className="block">
        <i className={"cl-icons icon-" + icon}></i>
        <div className="">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
        </div>
    </div>
    );
};
export default class JoinUs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <content>
                    <Landing title="和我们一起工作" desc="我们一直在进步..."/>

                    <Description title="为什么加入我们"desc="我们提供了富有竞争力的员工福利和上升空间。 "/>


                    <section className="how-to-join">
                        <Block icon='chuan' title="蓝海市场" desc="超过4000万企业端市场，解决企业营销痛点，助力企业互联网+,万亿级蓝海市场。"/>
                        <Block icon='daimayingyong' title="专业产品研发" desc="一线科技公司成员团队，致力于为企业提供立体化的服务和技术。10年行业经验积累。"/>
                        <Block icon='layers' title="立体市场布局" desc="渠道经理驻地支持，强有力的实战指导、协同谈单及团队培训，良好的售后支持及产品、技术快速响应。"/>
                        <Block icon='shangsheng' title="持续收益" desc="SaaS模式，丰富的套餐组合，持续性的经济收益。让利于合作伙伴，实现客户永续分成，保证充足利润空间。"/>
                    </section>


                    <div className="row">
                        <div className="btn btn-big">成为我们的合作伙伴</div>
                    </div>

                    <Description title="我们提供全方位的支持" desc="我们提供了富有竞争力的员工福利和上升空间"/>

                    <section className="category  justify-between direction-row">
                        <div className="block align-start">
                            <div className="title">产品支持</div>
                            <div className="desc">战略目标制定，阶段目标协助执行，定 期优秀运营案例分享。</div>
                        </div>
                        <div className="block align-start">
                            <div className="title">产品支持</div>
                            <div className="desc">专项市场费用、共享品牌投放效益、宣 传物料支持，展会活动支持，行业合作 撮合。</div>
                        </div>
                        <div className="block align-start">
                            <div className="title">产品支持</div>
                            <div className="desc">灵活的销售策略、客户特惠福利，销售 返点、促销支持，售前指导、协助公关。</div>
                        </div>
                        <div className="block align-start">
                            <div className="title">产品支持</div>
                            <div className="desc">全方位产品功能详解、产品应用场景解 析，销售经验分享、销售话术、市场建 议。</div>
                        </div>
                        <div className="block align-start">
                            <div className="title">产品支持</div>
                            <div className="desc">强大的售后团队、高效反馈机制、技术 响应。</div>
                        </div>
                        <div className="block align-start">
                            <div className="title">产品支持</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                    </section>

                    <Description title="合作伙伴说" />

                    <section className="category justify-between direction-row text-align-center">
                        <div className="block">
                            <img src='../assets/people.png' srcset="../assets/people.png 2x"/>
                            <div className="desc">Convertlab倡导的数字营销理念，深得 客户青睐，加上完善贴心的资源支持， 我们可以很快速的开通过新的客户。 拷贝</div>
                            <div className="name">刘德华</div>
                            <div className="job-title">华谊嘉信 渠道总监</div>
                        </div>
                        <div className="block">
                            <img src='../assets/people.png' srcset="../assets/people.png 2x"/>
                            <div className="desc">Convertlab倡导的数字营销理念，深得 客户青睐，加上完善贴心的资源支持， 我们可以很快速的开通过新的客户。</div>
                            <div className="name">刘德华</div>
                            <div className="job-title">华谊嘉信 渠道总监</div>
                        </div>
                        <div className="block">
                            <img src='../assets/people.png' srcset="../assets/people.png 2x"/>
                            <div className="desc">Convertlab倡导的数字营销理念，深得 客户青睐，加上完善贴心的资源支持， 我们可以很快速的开通过新的客户。</div>
                            <div className="name">刘德华</div>
                            <div className="job-title">华谊嘉信 渠道总监</div>
                        </div>
                    </section>

                    <Description title="怎样加入合作伙伴计划" />

                    <section className="how-to-join">
                        <div className="block">
                            <i className="cl-icons icon-chanpin"></i>
                            <div className="">
                                <div className="title">产品</div>
                                <div className="desc">是国内第一个一站式营销云解决方案，覆盖企业营销所需的各个环节。</div>
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
                            <i className="cl-icons icon-chanpin"></i>
                            <div className="">
                                <div className="title">产品</div>
                                <div className="desc">是国内第一个一站式营销云解决方案，覆盖企业营销所需的各个环节。</div>
                            </div>
                        </div>
                        <div className="block">
                            <i className="cl-icons icon-chanpin"></i>
                            <div className="">
                                <div className="title">产品</div>
                                <div className="desc">是国内第一个一站式营销云解决方案，覆盖企业营销所需的各个环节。</div>
                            </div>
                        </div>
                    </section>

                    <section className="location margin-vertical-large">
                        <div className="title justify-start row">联系我们</div>

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
                </content>
                <Footer/>
            </div>
        );
    }
}