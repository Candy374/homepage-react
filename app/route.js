/**
 * Created by huangling on 19/05/2017.
 */
/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import Home from '../src/js/containers/Home';
import Function from '../src/js/containers/Function';
import JoinUs from '../src/js/containers/JoinUs';
import Resource from '../src/js/containers/Resource';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/header">Header</Link></li>
                <li><Link to="/button">Button</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/header" component={Header}/>
            <Route path="/button" component={Button}/>
        </div>
    </Router>
)


const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/function" component={Function}/>
            <Route path="/join" component={JoinUs}/>
            <Route path="/resource" component={Resource}/>
        </div>
    </Router>
);

render(<App />, document.getElementById('root'));