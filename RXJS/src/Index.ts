
import { lorem, displayLog } from './Utils/utils'
import { fromEvent } from 'rxjs';
import { pluck, map, tap, filter } from 'rxjs/operators';


const ul = document.createElement("ul");
ul.classList.add("navbar");

const ArrayLinks: Array<string> = [
  "Inicio",
  "Sobre Nosotros",
  "Servicios",
  "Contactanos",
];

ArrayLinks.forEach((link) => {
  const li = document.createElement("li");
  li.innerText = link;
  ul.appendChild(li);
});

document.querySelector("body")?.
insertBefore(ul, document.querySelector("h1"));


const progressBar = document.createElement("div");
progressBar.classList.add('progress-bar')

document.querySelector("body")?.
insertBefore(progressBar, document.querySelector("h1"));

const p = document.createElement('p')
p.innerText = lorem
displayLog (p.innerText)


// funcion que realice el calculo

const calcularScroll = (event:any) => {
  
  const { scrollTop, scrollHeight, clientHeight} = event
  return (scrollTop/(scrollHeight - clientHeight)) * 100
}


const scroll$ = fromEvent(document,'scroll')

scroll$.pipe(
  pluck('target','documentElement'),
  map((eventFiltrado:any)=> calcularScroll(eventFiltrado)),
  tap ((value)=>console.log(value))
)
.subscribe((porcentaje)=>{
  if (porcentaje > 2){
    ul.style.display = 'none'
  }else{
  ul.style.display = 'flex'}
  progressBar.style.width = `${porcentaje}%`
});

