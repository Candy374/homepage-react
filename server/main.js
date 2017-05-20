/**
 * Created by huangling on 20/05/2017.
 */
var child_process = require('child_process');
var fs = require('fs');

var command =  'cd ../ && webpack --config ./webpack/webpack.config.dev-ssr.js && node ./server/index.js';

var compiled = false;

var startProcess = function() {
    if (!compiled) {
        fs.exists('../dist/assets/SSR.js', function () {
            command = 'cd . && node ./index.js';
            compiled = true;
        });
    }

    child_process.exec( command , function(err, stdout , stderr) {
        if (stderr) {
            console.log(stderr);
            startProcess();
        }
    });
};

startProcess();