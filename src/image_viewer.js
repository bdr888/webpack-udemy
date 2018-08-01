import './image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg'

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);

