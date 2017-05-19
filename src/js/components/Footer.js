/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

export default class Footer extends Component {
    componentWillMount() {
        this.blocks = [
            [{
                label: '首页',
                to: '/index'
            }, {
                label: '关于我们',
                to: '/us'
            }, {
                label: '产品更新',
                to: '/update'
            }],
            [{
                label: '人&数据',
                to: '/feature'
            }, {
                label: '内容&交互',
                to: '/feature'
            }, {
                label: '策略&自动化',
                to: '/feature'
            }, {
                label: '数据洞察',
                to: '/feature'
            }],
            [{
                label: '合作伙伴',
                to: '/work'
            }, {
                label: '营销学堂',
                to: '/resource'
            }, {
                label: '博客',
                to: '/blog'
            }]
        ];
    }

    render() {
        return (
            <footer>
                <div>
                    <div className="row justify-between">
                        <div className="left">
                            <div className="block">
                                <div className="logo">
                                    <img src="/assets/logo_footer.png"/>
                                </div>
                            </div>
                            {
                                this.blocks.map((block, index) => (
                                    <div className="block" key={index}>
                                        {
                                            block.map((link, key) => {
                                                return (
                                                    <Link className="link" key={key} to={link.to}>
                                                        {link.label}
                                                    </Link>
                                                )
                                            })
                                        }

                                    </div>
                                ))
                            }
                        </div>
                        <div className="contact">
                            <div className="phone"><img src="/assets/phone.png"/>400 850 9918</div>
                            <div><img src="/assets/wechat.png"/><span>微信公众号</span></div>
                            <div><img src="/assets/weibo.png"/><span>官方微博</span></div>
                        </div>
                    </div>

                    <div className="copyright">
                        <address>Copyrights © 2016 上海欣兆阳信息科技有限公司</address>
                        <span>备案信息:沪ICP备15038423号-1</span>
                    </div>
                </div>
            </footer>
        );
    }
}