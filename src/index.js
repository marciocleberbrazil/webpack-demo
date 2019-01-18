import _ from 'lodash';
//import Print from './print';

function component() {
    var element = document.createElement('div');

    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    //button.onclick = Print.bind(null, 'Hello webpack!');

    element.innerHTML = _.join(['Hello', 'webpack 4'], ' ');

    element.appendChild(br);
    element.appendChild(button);
    
    return element;
}

document.body.appendChild(component());