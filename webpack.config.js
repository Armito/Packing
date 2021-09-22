/*
 * @Author: your name
 * @Date: 2021-09-22 13:38:51
 * @LastEditTime: 2021-09-22 14:45:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Packing\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true
    },
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '开发环境'
        })
    ]
};