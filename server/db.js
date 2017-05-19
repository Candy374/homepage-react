/**
 * Created by huangling on 19/5/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/homepage';

var MONGO_DB;
// Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//
//     MONGO_DB = db;
// });

var getDB = function (callback) {
    if (MONGO_DB) {
        callback(MONGO_DB);
    } else {
        MongoClient.connect(url, function (err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            MONGO_DB = db;
            callback(db);
        });
    }
};


var insertDocuments = function (data, callback) {
    getDB(function (db) {
        // Get the documents collection
        var collection = db.collection('documents');
        // Insert some documents
        collection.insertMany(data, function (err, result) {
            assert.equal(err, null);
            assert.equal(data.length, result.result.n);
            assert.equal(data.length, result.ops.length);
            console.log("Inserted " + data.length + " documents into the collection");
            if (callback) {
                callback(result);
            }
        });
    })

};

var findDocuments = function (filter, callback) {
    getDB(function (db) {
        // Get the documents collection
        var collection = db.collection('documents');
        // Find some documents
        collection.find(filter).toArray(function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    });
};

module.exports = {
    insertDocuments,
    findDocuments
};