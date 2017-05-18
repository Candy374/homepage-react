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
        document.body.addEventListener('scroll', function (e) {
            console.log(e);
            this.head.classList.add('scrolled')
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
                        <img src="/assets/logo.png"/>
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
