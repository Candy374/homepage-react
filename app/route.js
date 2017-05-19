/**
 * Created by huangling on 19/05/2017.
 */
/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import Home from '../src/js/containers/Home';
import Function from '../src/js/containers/Function';
import JoinUs from '../src/js/containers/JoinUs';
import Resource from '../src/js/containers/Resource';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    StaticRouter,
} from 'react-router-dom'

const NotFound = () => (
    <Status code={404}>
        <div>
            <h1>Sorry, can’t find that.</h1>
        </div>
    </Status>
);

const ClientApp = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/index" component={Home}/>
        <Route path="/function" component={Function}/>
        <Route path="/join" component={JoinUs}/>
        <Route path="/resource" component={Resource}/>
        <Route component={NotFound}/>
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
        <Route path="/function" component={Function}/>
        <Route path="/join" component={JoinUs}/>
        <Route path="/resource" component={Resource}/>
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
        <Route component={NotFound}/>
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