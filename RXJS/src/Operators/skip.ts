import { Observer, of, fromEvent, interval } from "rxjs";
import {

  tap,
  takeUntil,
  skip,
} from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const boton = document.createElement("button");
boton.innerHTML = "detener tiempo";
document
  .querySelector("body")
  ?.insertBefore(boton, document.querySelector("#log-container"));

const counter$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(boton, "click").pipe(
  tap(()=> console.log('tap antes del skip')),
  skip(1),
  tap(()=>console.log('tap despues del skip'))
)
// clickBtn$.subscribe(observer);

// ejemplo con interval
// counter$.pipe(skip(4)).subscribe(observer)

counter$.pipe(
  takeUntil(clickBtn$)
  )
  .subscribe(observer);
