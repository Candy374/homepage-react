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

var routes = require('../src/js/routes');
var index = fs.readFileSync('./src/index.html', 'utf8');
app.use((req, res) => {
    // Match current URL to the corresponding React page
    // req.url必须是完整的URL，包含hash和query等
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            res.status(200)
            var react_stuff = renderToString(<RouterContext {...renderProps} />);
            //renderProps传递给RouterContext
            var c =  index.replace(
                /<div id="root"\/>/,
                '<div id="root">' + react_stuff + '</div>'
            );
            //将root中在服务端填充内容
            console.log(c);
            res.send(c);
        } else {
            res.status(404).send('not found');
        }
    })
});


app.get('/index', render.default);

app.get('/style/fonts/*', function (req, res) {
    var url = req.originalUrl.split('?')[0];
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + url)));
});

app.get('/style/*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + req.originalUrl)));
});

app.get('/assets/*', function (req, res) {
    res.sendFile(path.resolve(path.join(__dirname, '/../src/' + req.originalUrl)));
});

var port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);