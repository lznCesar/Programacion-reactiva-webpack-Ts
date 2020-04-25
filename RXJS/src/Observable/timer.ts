//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, interval, timer,} from "rxjs";
import { displayLog } from "./../Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${value}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

// el timer nos ayuda a que nos otorga datos en cada tiempo
// determinado, pero le podemos establecer en cuanto tiempo
// va a comenzar valores 
// (tiempo para comenzar/tiempo para arrojar el valor)

const incrementar10seg = new Date()
incrementar10seg.setSeconds(incrementar10seg.getSeconds()+10)

const src$ = timer(incrementar10seg)

displayLog('inicio');


src$.subscribe(observer)

displayLog('final');
