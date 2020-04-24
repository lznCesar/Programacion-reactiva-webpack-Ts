//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, interval, timer, range, from, fromEvent,} from "rxjs";
import { map } from "rxjs/operators";
import { displayLog } from "./Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${value}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

range(1,5).pipe(

  map((valor) =>  valor * 10))
  // .subscribe(observer)

const Keyup$ = fromEvent<KeyboardEvent>(document,'keyup')

Keyup$.pipe(
  map<KeyboardEvent,string>((event)=>event.code)
).subscribe(observer)