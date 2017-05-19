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
var renderToString = require('react-dom/server').renderToString;
var app = express();

var reactRouter = require('react-router');
var match = reactRouter.match;
var RouterContext = reactRouter.RouterContext;

var compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
}));

app.get('/', render.default);

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

var port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);