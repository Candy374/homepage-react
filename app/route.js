/**
 * Created by huangling on 19/05/2017.
 */
/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import Home from '../src/js/containers/Home';
import Function from '../src/js/containers/Function';
import About from '../src/js/containers/About';
import JoinUs from '../src/js/containers/JoinUs';
import Resource from '../src/js/containers/Resource';
import ResourceEdit from '../src/js/containers/ResourceEdit';
import Work from '../src/js/containers/Work';
import Update from '../src/js/containers/Update';
import SubmitForm from '../src/js/containers/SubmitForm';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    StaticRouter,
} from 'react-router-dom'


const ClientApp = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/index" component={Home}/>
        <Route path="/feature" component={Function}/>
        <Route path="/about" component={About}/>
        <Route path="/resource" component={Resource}/>
        <Route path="/edit" component={ResourceEdit}/>
        <Route path="/work" component={Work}/>
        <Route path="/update" component={Update}/>
        <Route path="/form" component={SubmitForm}/>
        <Route path="/join" component={JoinUs}/>
    </BrowserRouter>
);

const RedirectWithStatus = ({from, to, status}) => (
    <Route render={({staticContext}) => {
        // there is no `staticContext` on the client, so
        // we need to guard against that here
        if (staticContext) {
            staticContext.status = status;
        }
        return <Redirect from={from} to={to}/>
    }}/>
);

const ServerApp = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/index" component={Home}/>
        <Route path="/feature" component={Function}/>
        <Route path="/about" component={About}/>
        <Route path="/resource" component={Resource}/>
        <Route path="/edit" component={ResourceEdit}/>
        <Route path="/work" component={Work}/>
        <Route path="/update" component={Update}/>
        <Route path="/form" component={SubmitForm}/>
        <Route path="/join" component={JoinUs}/>
        <RedirectWithStatus
            status={301}
            from="/"
            to="/resource"
        />
        <RedirectWithStatus
            status={302}
            from="/"
            to="/resource"
        />
    </Switch>
);

const App = ({context, req}) => (
    <StaticRouter
        location={req.url}
        context={context}
    >
        <ServerApp/>
    </StaticRouter>
);

export {
    ClientApp,
    ServerApp,
    App
};