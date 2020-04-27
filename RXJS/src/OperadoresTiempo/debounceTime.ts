import { Observer, fromEvent} from "rxjs";
import { debounceTime, pluck } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent(document,'click')

// click$.pipe(
// // debounceTime(3000)
// )
// .subscribe(observer)

/*******************debouncetime*******************
este operador nos ayuda a retrasar el tiempo en el cual nuestra 
informacion se emite al observer
*************************************/

const input = document.createElement('input')
document.querySelector('#log-container')?.appendChild(input)

const input$ = fromEvent(input, 'keyup')
input$.pipe(
  debounceTime(2000),
  pluck('target','value')
).subscribe(observer)