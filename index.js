
import "./index.css";
import IMG_REACT from './assets/reactLogo.png';


console.log('Hellow World');

const title = document.createElement('h1')
title.textContent = 'I love JavaScrpt'
console.log('title: ', title);

const img = document.createElement('img')
img.className = 'imgReact'
img.src = IMG_REACT
document.body.append(title)
document.body.append(img)