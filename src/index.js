/*
 * @Author: your name
 * @Date: 2021-09-22 11:16:19
 * @LastEditTime: 2021-09-22 15:19:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Packing\index.js
 */

function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  }).catch((err) => { console.log('An error occured while loading component!') })
}

getComponent().then(c => {
  document.body.appendChild(c);
})
