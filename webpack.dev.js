const merge = require('webpack-merge');
const commmon = require('./webpack.common.js');

module.exports = merge(commmon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});