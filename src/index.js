import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['啥','玩','意'], '-');

  var btn = document.createElement('button');
  btn.innerHTML = "点我";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('接受printMe函数的更新');

    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}