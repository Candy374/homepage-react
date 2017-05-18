/**
 * Created by huangling on 14/05/2017.
 */
import React, {Component} from 'react';

export default class Landing extends Component {
    render() {
        const { title, desc, children, className, backgroudImg='sub_banner_bg'}  = this.props;
        return (
            <section className={"landing " + className}>
                <img className="background" src={`assets/${backgroudImg}.png`}/>
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
                {children}
            </section>
        )
    }
}
