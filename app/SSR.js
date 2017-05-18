/**
 * Created by huangling on 16/5/2017.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import App from '../src/js/components/Header';

export default function render(req, res) {
    const appString = renderToString(<App />);
    res.send(template({
        body: appString,
        title: 'Convertlab 营销实验室',
    }));
}