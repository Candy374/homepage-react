/**
 * Created by huangling on 14/05/2017.
 */

import React, {Component} from 'react';

export default class Footer extends Component {
    componentWillMount() {
        this.links = [
            [{
                label: '首页',
                url: ''
            }, {
                label: '关于我们',
                url: ''
            }, {
                label: '产品更新',
                url: ''
            }],
            [{
                label: '人&数据',
                url: ''
            }, {
                label: '内容&交互',
                url: ''
            }, {
                label: '策略&自动化',
                url: ''
            }, {
                label: '数据洞察',
                url: ''
            }],
            [{
                label: '合作伙伴',
                url: ''
            }, {
                label: '营销学堂',
                url: ''
            }, {
                label: '博客',
                url: ''
            }]
        ];
    }

    render() {
        return (
            <footer>
                <div className="row justify-between">
                    <div className="row">
                        <div className="logo">
                            <img src="../../assets/logo_footer.png"/>
                        </div>
                        <div className="row align-start">
                            {
                                this.links.map((link, index) => (
                                    <div className="block">
                                        <a className="link">
                                            {link.label}
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="contact">
                        <div><img src="../../assets/phone.png"/>400 850 9918</div>
                        <div><img src="../../assets/wechat.png"/>微信公众号</div>
                        <div><img src="../../assets/weibo.png"/>官方微博</div>
                    </div>
                </div>

                <div className="copyright">
                    <address>Copyrights © 2016 上海欣兆阳信息科技有限公司</address>
                    <span>备案信息:沪ICP备15038423号-1</span>
                </div>
            </footer>
        )
    }
}