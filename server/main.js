/**
 * Created by huangling on 20/05/2017.
 */
var child_process = require('child_process');


var command = 'node ./index.js';
var fs = require('fs');

child_process.execFile( './index.js' , function(err, stdout , stderr) {
    console.log(stdout);
});
// child_process.exec('node', ['./server/index.js'], function(error, stdout, stderr) {
//     if (error) {
//         throw error;
//     }
//     console.log(stdout);
// });