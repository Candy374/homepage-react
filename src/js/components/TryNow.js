/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';
import SubmitEmail from './SubmitEmail';

export default class TryNow extends Component {
    render() {
        const { children } = this.props;
        return (
            <section className="try-now">
                <div className="block">
                    <div className="title">开始免费试用</div>
                    <div className="row">
                        <div className="desc">简单快速配置</div>
                        <div className="desc">15天免费</div>
                        <div className="desc">任意时间可退</div>
                    </div>

                    {children || <SubmitEmail btnText='免费试用'/>}
                </div>
            </section>
        );
    }
}