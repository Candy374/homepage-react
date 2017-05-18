import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/js/components/Header';
import template from '../app/template';

const app = express();

app.get('/', (req, res) => {
    const appString = renderToString(<App />);

    res.send(template({
        body: appString,
        title: 'Convertlab 营销实验室'
    }));
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);