/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <section className="try-now">
                <div className="block">
                    <div className="title">开始免费试用</div>
                    <div className="row">
                        <div className="desc">简单快速配置</div>
                        <div className="desc">15天免费</div>
                        <div className="desc">任意时间可退</div>
                    </div>

                    <div className="input-group">
                        <input placeholder="填写邮箱"/>
                        <button className="btn-danger">免费试用</button>
                    </div>
                </div>
                <div className="block">
                    <div className="logo-group">

                    </div>
                </div>
            </section>
        );
    }
}