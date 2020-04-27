import { Observer, fromEvent, asyncScheduler} from "rxjs";
import {  pluck, throttleTime, map, sampleTime } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document,'click')
/*******************sampleTime*******************

*************************************/

click$.pipe(
  map(({x , y})=>({x,y})),
  sampleTime(3000)
).subscribe(observer)