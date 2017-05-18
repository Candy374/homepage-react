/**
 * Created by huangling on 16/5/2017.
 */

const path = require('path');

module.exports = {
    publicPath: 'dist/assets/',
    assetsPath: path.join(__dirname, '..', 'dist', 'assets'),
    commonLoaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            // include: path.join(__dirname, '..', 'app'),
            exclude: path.join(__dirname, '..', 'node_modules'),
        },
    ],
};