/**
 * Created by huangling on 14/05/2017.
 */
import React, {Component} from 'react';

export default class Landing extends Component {
    render() {
        const { title, desc, children}  = this.props;
        return (
            <section className="landing">
                <img className="background" src="assets/sub_banner_bg.png"/>
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                {children}
            </section>
        )
    }
}
