// import express from 'express';
// import webpack from 'webpack';
// import webpackConfig from '../webpack/webpack.config.dev-client';

var babel = require('babel-register');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('../webpack/webpack.config.dev-client');
var path = require('path');
var fs = require('fs');

var routes = require('./routes');

var bodyParser = require('body-parser');


var render = require('../dist/assets/SSR');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

var validRoutes = ['/', '/home', '/about', '/feature', '/join',
    '/resource', '/edit', '/form'
];
app.get('/*', function(req, res) {
    var url = req.originalUrl.split('?')[0];
    if (validRoutes.includes(url)) {
        req.url = url;
        render.default(req, res);
    } else {
        req.next();
    }
});

app.get('/style/fonts/*', function(req, res) {
    var url = req.originalUrl.split('?')[0];
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + url)));
});

app.get('/style/*', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + req.originalUrl)));
});

app.get('/assets/*', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + req.originalUrl)));
});

routes(app);

app.get('*', function(req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/404.html')));
});


var port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);