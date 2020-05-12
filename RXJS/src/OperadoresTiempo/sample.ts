import { Observer, fromEvent, asyncScheduler, interval} from "rxjs";
import {  pluck, throttleTime, map, sampleTime, sample } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document,'click')
/*******************sample*******************

*************************************/

const interval$ = interval(1000)

interval$.pipe(
  sample(click$)
)
.subscribe(observer)