import _ from 'lodash';
import './style.css';
import Icon from './cross.jpeg';

function component (){
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack'], '  ');
  element.classList.add('hello');

  // 将图像添加到我们现有的div

  var MyIcon = new Image();
  MyIcon.src = Icon;
  element.appendChild(MyIcon);

  return element;
}

document.body.appendChild(component());