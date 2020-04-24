//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, fromEvent } from "rxjs";
import { displayLog } from "./Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]  ${value}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document,'keyup');

src1$.subscribe(({x,y}) =>{
  console.log(x);
  console.log(y);
});
