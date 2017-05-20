/**
 * Created by huangling on 15/05/2017.
 */
import React, { Component } from 'react';
import DownloadResource from '../../components/DownloadResource';

export default class ResourceDetail2 extends Component {
    componentDidMount() {
        this.content.innerHTML = this.props.content;
    }

    componentDidUpdate() {
        this.content.innerHTML = this.props.content;
    }

    render() {
        const { preview, tags, fileName, size,  title, content} = this.props;

        return (
            <section className="resource-detail">
                <div className="detail">
                    <div className="title row align-center">{title}</div>
                    <div className="tags justify-center">{
                        tags.map((tag, index)=> <div className="tag" key={index}>{tag}</div>)
                    }</div>
                    <div className="content markdown" ref={node => this.content = node}/>
                    <div className="highlight bold">{fileName}</div>
                    <div className="highlight">{size}</div>

                    {!preview && <DownloadResource />}
                </div>

            </section>
        );
    }
}