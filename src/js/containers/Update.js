/**
 * Created by huangling on 15/05/2017.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {getData} from '../actions/db';
import Landing from '../components/Landing';
import TryNow from '../components/TryNow';

const TimeStamp = (props) => {
    const {publishDate, title, briefs, desc, active, onMore, details = []} = props;
    const classes = ['stamp', 'left'];
    if (!active) {
        classes.push('disabled');
    }
    return (
        <div className={classes.join(' ')}>
            <span className="time">{publishDate}</span>
            <div className="text-block">
                <div className="title">{title}</div>
                {active ?
                    <div>
                        <p>{briefs}</p>
                        <br/>
                        <p>{desc}</p>

                        {details.map((detail, key) => {
                            const {title, desc, link, img = 'btn_icon_01.png', name, jobTitle, like = 0} = detail;
                            return (
                                <div className="row direction-row align-start" key={key}>
                                    <div className="badge">
                                        <div className="avatar">
                                            <img src={img.indexOf('//') > -1 ? img : `assets/${img}`}/>
                                        </div>
                                        <div className="name">{name}</div>
                                        <div className="job-title">{jobTitle}</div>
                                    </div>
                                    <div className="detail-desc">
                                        <div className="sub-title">{title}</div>
                                        <p>{desc}</p>
                                        {link && <a className="more arrow2" href={link} target="_blank">更多详情</a>}
                                        <div className="like">
                                            <i className="cl-icons icon-zan"></i>
                                            <span className="num">{like}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div> :
                    <div className="detail-desc">
                        <div className="desc">{briefs}</div>
                        <a className="more arrow" onClick={onMore}>了解更多</a>
                    </div>
                }
            </div>
        </div>
    )
};

export default class Update extends Component {
    componentWillMount() {

        this.state = {
            data: [],
            activeItem: ''
        };

        this.getData();
    }

    getData = () => {
        getData('update').then(data => {
            this.setState({data, activeItem: data.length > 0 ? data[0].id : ''});
        })
    };

    render() {
        const {data, activeItem} = this.state;
        return (
            <div>
                <Header/>
                <content>
                    <Landing title="产品更新" desc="我们一直在进步..."/>

                    <section className="update-info margin-vertical-large">
                        <div className="time-line-2">
                            {
                                data.map((d, key) => (
                                    <TimeStamp {...d} key={key}
                                               onMore={() => this.setState({activeItem: d.id})}
                                               active={activeItem == d.id}/>
                                ))
                            }
                        </div>
                    </section>
                    <TryNow />
                </content>
                <Footer/>
            </div>
        );
    }
}