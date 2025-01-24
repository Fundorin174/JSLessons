import './styles/main.scss';
import magicWand from "./assets/magic_wand_545451_defda6-481142-9ebb1b.svg";
import {randomGradient} from "./randomGradient.js";

const body = document.querySelector('body');
const button = document.querySelector('button');
const image = document.querySelector('#wand');
image.src = magicWand;
button.addEventListener('click', () => {
  body.style.background = randomGradient();
})

console.log('+++++')