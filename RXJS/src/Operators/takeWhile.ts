import { Observer, of, fromEvent } from "rxjs";
import { map, pluck, mapTo, take, first, tap, takeWhile } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify (value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");

const src$ = of(1,2,3,4,3,5,1,7);

// takeWhile arroja valores al observer mientras la condición
// hasta que la condición del while se cumpla
src$.pipe(
  takeWhile((numero)=> numero < 4)
)
// .subscribe(observer)
click$.pipe(
  map(({x,y})=> ({x,y})),
  takeWhile(({y})=> y <= 150)
).subscribe(observer)