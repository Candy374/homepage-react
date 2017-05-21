/**
 * Created by huangling on 19/5/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/homepage';

var MONGO_DB;

var getDB = function(callback) {
    if (MONGO_DB) {
        callback(MONGO_DB);
    } else {
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            MONGO_DB = db;
            callback(db);
        });
    }
};

var insert = function(coll, data, callback) {
    getDB(function(db) {
        // Get the documents collection
        var collection = db.collection(coll);
        // Insert some documents
        collection.insertOne(data, function(err, result) {
            assert.equal(err, null);
            console.log(data);
            if (callback) {
                callback(result);
            }
        });
    });
};

var find = function(coll, filter, callback) {
    getDB(function(db) {
        // Get the documents collection
        var collection = db.collection(coll);
        // Find some documents
        collection.find(filter).toArray(function(err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    });
};

var insertDocuments = function(data, callback) {
    insert('documents', data, callback);

    var doc = {
        title: data.title,
        img: data.img,
        id: data.id,
        tag: data.tag
    };

    insert('docs', doc, callback);
};

var insertUpdateInfo = function (data, callback) {
    insert('updateInfo', data, callback);
};

var insertForms = function(data, callback) {
    insert('form', data, callback);
};

var findDocuments = function(filter, callback) {
    find('documents', filter, callback);
};

var findForm = function(filter, callback) {
    find('form', filter, callback);
};

var findDocs = function(callback) {
    find('docs', {}, callback);
};

var findUpdateInfo = function(callback) {
    find('updateInfo', {}, callback);
};

module.exports = {
    insertDocuments,
    findDocuments,
    insertForms,
    findForm,
    findDocs,
    insertUpdateInfo,
    findUpdateInfo
};