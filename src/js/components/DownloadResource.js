/**
 * Created by huangling on 18/5/2017.
 */
/**
 * Created by huangling on 14/05/2017.
 */

import React, { Component } from 'react';
import SubmitEmail from './SubmitEmail';

export default class DownloadResource extends Component {
    render() {
        return (
            <div className="download-resource">
                <div className="title">免费下载这份材料</div>
                <div className="desc">获取这份材料的PDF版本，还有很多干货内容尽在Convertlab</div>
                <div className="desc">将您的邮箱告诉我们，我们会把材料下载地址发送到您的邮箱里。</div>
                <SubmitEmail btnText="获取免费材料" type="primary"/>
            </div>
        );
    }
}