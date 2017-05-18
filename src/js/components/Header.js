/**
 * Created by huangling on 14/05/2017.
 */
import React, {Component} from 'react';
import Button from '../components/Button';
// import styles from '../../style/head.css';

export default class Header extends Component {
    componentWillMount() {
        this.links = [{
            label: '功能'
        }, {
            label: '我们'
        }, {
            label: '学堂'
        }];
    }

    componentDidMount() {
        this.img2.style.display = 'none';
        window.addEventListener('scroll', () => {
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
                            this.links.map((link, index) => <a className='nav-item' key={index}>{link.label}</a>)
                        }
                        <Button text="账号登录" onClick={this.onClick}/>
                    </nav>
                </div>
            </header>
        )
    }
}
