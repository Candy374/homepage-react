/**
* Created by huangling on 14/05/2017.
*/

import React, {Component} from 'react';

export default class Description extends Component {
    render () {
        const { title, desc, children } = this.props;
        return (
            <section className="description">
                <div className="title row">{title}</div>
                <div className="desc">{desc}</div>
                {children}
            </section>
        );
    }
}