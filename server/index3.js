var express = require('express');
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var App = require('../src/js/components/Header');
var template = require('../app/template');

var app = express();
var safeJSONString = function (o) {
    return JSON.stringify(o)
        .replace(/<\/script/g, '<\\/script')
        .replace(/<!--/g, '<\\!--');
};

app.get('/', (req, res) => {
    var on = function () {
        alert('ss')
    };
    var appString = renderToString(
        React.createElement('App', {on: on})
    );

    res.render('switching', {
        html: appString,
        dataForClient: safeJSONString({on: on})
    });
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);