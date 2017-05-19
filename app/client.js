/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import { ServerApp, App } from './route';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

 render(<BrowserRouter><ServerApp /></BrowserRouter>, document.getElementById('root'));
