import './styles/main.css'
import icon from './assets/icon.jpg'

const btn = document.getElementById('Btn');
const imgelement = document.getElementById('appimg');
imgelement.src = icon;

let count = 0;

const counter = () => {
    count = count + 1;
    btn.innerText = `click ${count}`
   
}


btn.addEventListener('click', counter)