/**
 * Created by huangling on 20/05/2017.
 */
var db = require('./db');

module.exports = function(app) {
    app.post('/db/library/add', function(req, res) {
        db.insertDocuments(req.body, function() {
            res.end();
        })
    });

    app.get('/db/library/get', function(req, res) {
        db.findDocuments(req.query, function(docs) {
            res.send(docs[0]);
        })
    });

    app.get('/db/library/list', function(req, res) {
        db.findDocs(function(docs) {
            res.send(docs || []);
        })
    });

    app.post('/db/update/add', function(req, res) {
        db.insertUpdateInfo(req.body, function() {
            res.end();
        })
    });

    app.get('/db/update/list', function(req, res) {
        db.findUpdateInfo(function(docs) {
            res.send(docs || []);
        })
    });

    app.post('/db/form/submit', function(req, res) {
        db.insertForms(req.body, function() {
            res.end();
        })
    });
};