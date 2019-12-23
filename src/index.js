import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack 撒德哈圣诞节'], ' ');

  return element;
}

document.body.appendChild(component());