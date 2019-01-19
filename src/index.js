import _ from 'lodash';
import printMe from './print';

function component (){
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'Webpack'], '  ');
  element.classList.add('hello');

  btn.innerHTML = 'CLick me';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());