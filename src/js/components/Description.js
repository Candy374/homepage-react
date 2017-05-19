/**
* Created by huangling on 14/05/2017.
*/

import React, {Component} from 'react';

export default class Description extends Component {
    render () {
        const { title, desc, children, className, short, align = '', vertical='' } = this.props;
        let descComp;
        if (desc instanceof Array) {
            descComp = desc.map((d, i) => <div key={i} className="desc">{d}</div>)
        } else {
            descComp = <div className="desc">{desc}</div>;
        }

        const classes = "description " + className + ' text-align-' + align + ' margin-vertical-' + vertical;
        return (
            <section className={classes}>
                <div className='title row'>{title}</div>
                {descComp}
                {children}
            </section>
        );
    }
}