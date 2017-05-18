/**
 * Created by huangling on 14/05/2017.
 */
import React, {Component} from 'react';
import Button from '../components/Button';
// import styles from '../../style/head.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Header extends Component {
    componentWillMount() {
        this.links = [{
            label: '功能',
            to: 'function'
        }, {
            label: '我们',
            to: 'join'
        }, {
            label: '学堂',
            to: 'resource'
        }];
    }

    componentDidMount() {
        this.img2.style.display = 'none';
        window.addEventListener('scroll', () => {
            this.head = document.getElementsByTagName('header')[0];
            this.img1 = document.getElementsByTagName('img')[0];
            this.img2= document.getElementsByTagName('img')[1];
            if (document.body.scrollTop > 0) {
                this.head.classList.add('scrolled');
                this.img1.style.display = 'none';
                this.img2.style.display = 'block';
            } else {
                this.head.classList.remove('scrolled');
                this.img2.style.display = 'none';
                this.img1.style.display = 'block';
            }
        })
    }

    onClick = () => {
        alert('ddd')
    };

    render() {
        const { type } = this.props;
        return (
            <header ref={node => this.head = node} className={type}>
                <div>
                    <div className='logo'>
                        <img ref={node => this.img1 = node} src="/assets/logo.png"/>
                        <img ref={node => this.img2 = node} src="/assets/logo_theme.png"/>
                    </div>
                    <nav id="nav">
                        {
                            this.links.map((link, index) =><Link className='nav-item' key={index} to={link.to}>{link.label}</Link>)
                        }
                        <a className="btn btn-default" target="_blank" href="https://app.convertlab.com/login.html">账号登录</a>
                    </nav>
                </div>
            </header>
        )
    }
}
