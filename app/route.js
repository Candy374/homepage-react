/**
 * Created by huangling on 19/05/2017.
 */
/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import Home from '../src/js/containers/Home';
import Function from '../src/js/containers/Feature';
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

const routes = [{
    path: '/index', component: Home },{
    path: '/feature', component: Function },{
    path: '/about', component: About },{
    path: '/resource', component: Resource },{
    path: '/edit', component: ResourceEdit },{
    path: '/work', component: Work },{
    path: '/update', component: Update },{
    path: '/form', component: SubmitForm },{
    path: '/join', component: JoinUs
}];

const ClientApp = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home}/>
        {routes.map((route, index) => <Route key={index} {...route}/>)}
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
        {routes.map((route, index) => <Route key={index} {...route}/>)}
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

export {
    ClientApp,
    ServerApp
};