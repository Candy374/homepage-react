/**
 * Created by huangling on 18/5/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';
import { Link } from 'react-router-dom'

const features = [{
    anchor: '#people',
    img: 'btn_icon_01',
    text: '人&数据'
}, {
    anchor: '#engage',
    img: 'btn_icon_02',
    text: '内容&交互'
}, {
    anchor: '#automation',
    img: 'btn_icon_03',
    text: '策略&自动化'
}, {
    anchor: '#insight',
    img: 'btn_icon_04',
    text: '数据洞察'
}];

const featureDesc = [{
    id: 'people',
    title: '人&数据',
    desc: 'Convertlab Digital Marketing Hub产品，帮助企业全面了解客户，建立基于数据洞察的 营销策略，并持',
    tryNow: '马上建立属于自己的客户数据资产',
    blocks: [{
        icon: 'kehu',
        title: '客户360°画像',
        desc: '从人口统计学、兴趣偏好、活跃度、 客户阶段维度，绘制客户全景画像。 名片&标签，前面了解客户；触点行 为时间轴，伸缩查看历史记'
    }, {
        icon: 'tag',
        title: '自动化标签',
        desc: '将用户信息、行为数据、交易数据 标签化，方便查询和检索。全面的 标签模型；自定义建模，根据规则， 自动给客户打上标签。'
    }, {
        icon: 'qunzu',
        title: '智能群组',
        desc: '将符合条件的客户归入客户群组，方 便后期维护和开展针对性的营销互动。 支持多种组合条件的群组规则。'
    }, {
        icon: 'kehulianxi',
        title: '客户评分体系',
        desc: '自定义评分规则，根据客户属性和行 为，自动累计积分，量化客户活跃度、 忠诚度和价值。根据价值差异制定不 同的营销策略。'
    }, {
        icon: 'daoru',
        title: '客户数据导入',
        desc: '一键导入本地已有的客户数据，避免 再次录入的重复劳动。支持xlsx、txt、 csv格式文件和API数据导入；智能解 析数据文'
    }, {
        title: '',
        desc: ''
    }]
}, {
    id: 'engage',
    title: '内容&交互',
    desc: 'Convertlab Digital Marketing Hub产品，帮助企业全面了解客户，建立基于数据洞察的 营销策略，并持',
    tryNow: '开始创造内容，挥洒你的创意',
    blocks: [{
        icon: 'yemianbianji',
        title: '微页面',
        desc: '可视化编辑操作，高效低爆发灵感， 展现创意。拖拽&释放操作；文案排 版、背景色风格任意切换、预置用户 追踪埋点。'
    }, {
        icon: 'mubiaoyemianliebiao',
        title: '表单',
        desc: '强大的表单制作工具，轻松设计制作 出需要的表单，文成信息收集和整理。 丰富的表单组件，样式风格一键切换， 支持表单逻辑、预置追'
    }, {
        icon: 'duanxin',
        title: 'SMS',
        desc: '稳定快速的短信发送服务，电信、移 动、联通三网号段全覆盖；99%到达 率，企业专属通道；实时监控发送状 态；多通道备份。'
    }, {
        icon: 'edm',
        title: 'EDM',
        desc: '高效稳定安全的邮件营销发送服务。 强大的编辑器、移动设备适配；丰富 的模板；高效送达机制，ESP白名单、 信誉度策略；企业域名'
    }, {
        icon: 'app',
        title: 'APP推送',
        desc: '专属消息编辑器。企业级客户独享推送 通道，支持海量并发下的高性能、毫秒 级推送；定向、定时推送，结合行为捕 捉SDK的触发式推'
    }, {
        title: '',
        desc: ''
    }]
}, {
    id: 'automation',
    title: '策略&自动化',
    desc: 'Convertlab Digital Marketing Hub产品，帮助企业全面了解客户，建立基于数据洞察的 营销策略，并持',
    tryNow: '开始创造内容，挥洒你的创意',
    blocks: [{
        icon: 'mobanwendang',
        title: '多种模板流程',
        desc: '使用触发器、动作和条件创建多样化 和有用的自动流程规则，如：生日营 销、新品营销活动系列。'
    }, {
        icon: 'xiaozhushouliucheng',
        title: '支持复杂的自动流程',
        desc: '通过简单分支、多分支判断、定时器 等组件，可以设计出逻辑更复杂的自 动流程，以适应复杂的营销场景。'
    }, {
        icon: 'zujianicon01',
        title: '组件之间的连接与流程控制',
        desc: '在箭头的帮助下，你可以建立触发器、 条件和动作之间的关系。只需要将箭头 从一个组件拖动到另一个组件。'
    }, {
        icon: 'banbenqiehuan',
        title: '可切换试图',
        desc: '在创建复杂自动流程时，使用缩放工 具根据需要进行放大和缩小。'
    }, {
        icon: 'components',
        title: '丰富的组件',
        desc: '流程触发器、面向客户的执行动作、 条件判断、流程控制，4个大类、20 余个组件。'
    }, {
        icon: 'wodekehu',
        title: '客户数据',
        desc: '了解有多少人访问了你的网站、关注 了微信、阅读了邮件、购买了商品、 和品牌进行了互动等。'
    }, {
        icon: 'rocket',
        title: '大批量&实时性',
        desc: '底层引擎基于高可用和高可靠原则设 计，能够处理大规模的客户量和客户 行为，同时保持强壮的运行鲁棒性。'
    }, {
        icon: 'gexingzhuangban2',
        title: '个性化客户互动',
        desc: '在合适的时机与客户进行一对一互动。 只需要准备和优化好客户旅程会触及 的节点，将它们在自动流程中设定好。'
    }, {
        icon: 'yanjing',
        title: '洞察并紧跟客户',
        desc: '将营销的工作重点放在可以获得结果 的动作上。使用客户最近的动作来触 发自动流程，发现接近转化的客户。'
    }, {
        icon: 'king',
        title: '提高客户忠诚度',
        desc: '通过有效的自动流程（微信、邮件、 短信、PUSH）以及交互感知和上下 文感知，确保显著提升客户忠诚度。'
    }]
}, {
    id: 'insight',
    title: '数据洞察',
    desc: 'Convertlab Digital Marketing Hub产品，帮助企业全面了解客户，建立基于数据洞察的 营销策略，并持',
    tryNow: '立即拥有自己的数据仪表盘',
    blocks: [{
        icon: 'zhanghufenxi',
        title: '客户分析',
        desc: '属性、标签、互动记录、消费记录、 会员状态等客户关键信息，任意组合 可以进行用户群体分析，并支持交叉 组合分析和下钻。用户整体'
    }, {
        icon: 'rili',
        title: '同期分析',
        desc: '针对不同人群的同期行为进行比较， 可立即找到例如用户留存情况等时间 相关的关键趋势，并在自由设定的不 同人群之间灵活对比，找到'
    }, {
        icon: 'fenxi',
        title: '行为分析',
        desc: '每时每刻你的客户和潜在客户都在不同 的触点进行互动和响应。行为分析可以 从数据中分析趋势、挖掘规律、找到潜 在问题。支持对不同'
    }, {
        icon: 'bingtu',
        title: '营销效果分析',
        desc: '企业在进行营销活动是，往往会运用 多种营销内容进行推广，统计每一项 营销内容的成效非常繁琐，营销效果 分析将一个活动所有的营销'
    }, {
        icon: 'loudou01',
        title: '漏斗分析',
        desc: '自定义转化路径，一键生成转化漏斗。 从繁杂的各转化路径中找到最优路径或 关键流失步骤。结合多维度细分和下钻， 成功转化的规律和'
    }, {
        icon: 'yibiao',
        title: '仪表盘',
        desc: '转为管理层和运营人员的综合仪表盘，可 将前述各类分析自有组合在一起，综合分 析和评估某个主题的各个方面。DM Hub 的仪表盘'
    }]
}];

const SectionGroup = ({ title, desc, blocks, id, tryNow }) => (
    <div className="section-group">
        <span className="hash" id={id}/>
        <section className="description">
            <div className="title row">{title}</div>
            <div className="desc">{desc}</div>
        </section>

        <section className="figure">
            <figure>
                <img src={`../assets/${id}_concept.png`} srcSet={`../assets/${id}_concept.png 2x`}/>
            </figure>
        </section>

        <section className="category justify-between direction-row">
            {blocks.map(({ title, desc, icon }, index) => (
                    <div className="block align-start">
                        <i className={'cl-icons icon-' + icon}></i>
                        <div className="title">{title}</div>
                        <div className="desc">{desc}</div>
                    </div>
                )
            )}
        </section>

        <div className="row">
            <Link className="btn btn-big arrow" to="/form">{tryNow}</Link>
        </div>
    </div>
);

export default class Feature extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.hash != this.props.location.hash) {
            this.scrollTo();
        }
    }

    scrollTo = (id) => {
        console.log('scorll to ' + id)
    };

    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname}/>
                <content>
                    <Landing title="对于做营销，我们很有用， 甚至还有点好用" id="people">
                        <div className="row">
                            {features.map(({ anchor, img, text }, index) => (
                                <a className="block" href={anchor} key={index}>
                                    <figure>
                                        <img src={`../assets/${img}.png`}/>
                                    </figure>
                                    <div className="desc">{text}</div>
                                </a>
                            ))}
                        </div>
                    </Landing>
                    {featureDesc.map((feature, index) => <SectionGroup {...feature}/>)}
                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}