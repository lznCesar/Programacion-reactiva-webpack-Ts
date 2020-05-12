import { Observer, fromEvent, asyncScheduler, interval, timer} from "rxjs";
import {  pluck, throttleTime, map, sampleTime, sample, switchMap } from "rxjs/operators";
import { displayLog } from "./Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document,'click')
const timer$ = timer(0,1000);
/*******************switchMap*******************

*************************************/

// click$.subscribe((valor)=> {
//   timer$.subscribe((valor)=> console.log(valor))
// })


click$.pipe(
  switchMap((x)=>timer$)
).subscribe(valor=> console.log(valor)
)