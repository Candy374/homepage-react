/**
 * Created by huangling on 20/05/2017.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Breadcrumb extends Component {
    render() {
        const { links } = this.props;
        let breadcrumb = links.reduce((pre, current, index) => {
            current.className = 'breadcrumb-link';
            pre.push(current);
            if (index < links.length - 1) {
                pre.push({className: 'split', label: '>'});
            }
            return pre;
        }, []);

        return (
            <div className="breadcrumb">
                {breadcrumb.map(({className, to, label}, index) => {
                    if (to) {
                        return <Link className={className} to={to} key={index}>{label}</Link>;
                    } else {
                        return <div className={className} key={index}>{label}</div>
                    }
                })}
            </div>
        );
    }
}