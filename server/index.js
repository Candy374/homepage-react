// import express from 'express';
// import webpack from 'webpack';
// import webpackConfig from '../webpack/webpack.config.dev-client';

var babel = require('babel-register');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('../webpack/webpack.config.dev-client');
var path = require('path');
var fs = require('fs');

var render = require('../dist/assets/SSR');
var app = express();

var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

var validRoutes = ['/', '/index', '/function', '/join', '/resource'];
app.get('/*', function(req, res) {
    if (validRoutes.includes(req.url)) {
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

app.get('*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/404.html')));
});


var port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);