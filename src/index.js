/*
 * @Author: your name
 * @Date: 2021-09-22 11:16:19
 * @LastEditTime: 2021-09-22 14:20:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Packing\index.js
 */
import _ from 'lodash'
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button')

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check in the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element;
}
  
document.body.appendChild(component());