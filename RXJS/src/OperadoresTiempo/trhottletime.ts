import { Observer, fromEvent, asyncScheduler} from "rxjs";
import {  pluck, throttleTime } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent(document,'click')

// click$.pipe(
// throttleTime(3000)
// )
// .subscribe(observer)

/*******************throttleTime(ventanadetiempo)*******************
este operador a partir del primer valor ignora los siguientes en una 
ventana de tiempo especifica 
*************************************/

const input = document.createElement('input')
document.querySelector('#log-container')?.appendChild(input)

const input$ = fromEvent(input, 'keyup')
input$.pipe(
  throttleTime(5000,asyncScheduler,{
    leading:true,
    trailing:  true
    // esta es la sintaxis para poder imprimir los datos despues de la
    // ventana de tiempo que colocamos dentro del throttletime
  }),
  pluck('target','value')
).subscribe(observer)