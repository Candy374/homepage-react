/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import Home from '../src/js/containers/Home';
import About from '../src/js/containers/About';
import Function from '../src/js/containers/Function';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import createBrowserHistory from 'history/es/createBrowserHistory';

const App = () => (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Home} >
            <Route path="about" component={About} />
            <Route path="function" component={Function} />
        </Route>
    </Router>
);

render(<App />, document.getElementById('root'));