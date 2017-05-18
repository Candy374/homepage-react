/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Description from '../components/Description';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

export default class Work extends Component {
    render() {
        return (
            <div>
                <Header/>
                <content>
                    <Landing title="和我们一起工作" desc="我们一直在进步..."/>

                    <section className=" margin-vertical-large">
                        <div className="job-info">
                            <div className="block">
                                <div className="title">
                                    <i className="cl-icons icon-app"></i>
                                    <span>研发工程师</span>
                                </div>
                                <div className="job-list">
                                    <div className="job-item">
                                        <a className="more">前端开发</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="title">
                                    <i className="cl-icons icon-app"></i>
                                    <span>产品&设计</span>
                                </div>
                                <div className="job-list">
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="title">
                                    <i className="cl-icons icon-app"></i>
                                    <span>产品&设计</span>
                                </div>
                                <div className="job-list">
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <div className="title">
                                    <i className="cl-icons icon-app"></i>
                                    <span>产品&设计</span>
                                </div>
                                <div className="job-list">
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                    <div className="job-item">
                                        <a className="more">产品经理</a>
                                        <div>上海</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Description title="员工福利" desc="我们提供了富有竞争力的员工福利和上升空间。 "/>

                    <section className="category justify-between direction-row text-align-center">
                        <div className="block">
                            <img src='/assets/people.png' srcset="/assets/people.png 2x"/>
                            <div className="title">年度旅游</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                        <div className="block">
                            <img src='/assets/people.png' srcset="/assets/people.png 2x"/>
                            <div className="title">年度旅游</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                        <div className="block">
                            <img src='/assets/people.png' srcset="/assets/people.png 2x"/>
                            <div className="title">年度旅游</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                        <div className="block">
                            <img src='/assets/people.png' srcset="/assets/people.png 2x"/>
                            <div className="title">年度旅游</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                        <div className="block">
                            <img src='/assets/people.png' srcset="/assets/people.png 2x"/>
                            <div className="title">年度旅游</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                        <div className="block">
                            <img src='/assets/people.png' srcset="/assets/people.png 2x"/>
                            <div className="title">年度旅游</div>
                            <div className="desc">每年一次境内外团建旅游一次境内 外团建旅游都会死的呼死</div>
                        </div>
                    </section>

                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}