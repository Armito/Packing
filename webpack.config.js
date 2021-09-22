/*
 * @Author: your name
 * @Date: 2021-09-22 13:38:51
 * @LastEditTime: 2021-09-22 13:38:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Packing\webpack.config.js
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};