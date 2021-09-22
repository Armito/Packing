/*
 * @Author: your name
 * @Date: 2021-09-22 11:16:19
 * @LastEditTime: 2021-09-22 13:53:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Packing\index.js
 */
import _ from 'lodash'
import './style.css'

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  return element;
}
  
document.body.appendChild(component());