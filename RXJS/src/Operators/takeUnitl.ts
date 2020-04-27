import { Observer, of, fromEvent, interval } from "rxjs";
import {
  map,
  pluck,
  mapTo,
  take,
  first,
  tap,
  takeWhile,
  takeUntil,
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
const clickBtn$ = fromEvent<MouseEvent>(boton, "click");

counter$.pipe(
  takeUntil(clickBtn$)
  )
  .subscribe(observer);
