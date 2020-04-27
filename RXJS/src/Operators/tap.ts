//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, range, from, fromEvent} from "rxjs";
import { filter, pluck, map, tap } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";
import {Empleado2} from "./../Interfaces/interfaces"
// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const numero$ = range(1,7);

numero$.pipe(
  // el tap tiene tres canales igual que un observer 1 next 2 error 3 complet
  tap((x)=>console.log('antes', x)),
  map((vaL)=> vaL * 10),
  tap({
    next: valor => console.log('despues', valor),
    complete: () => console.log('se termino todo ')
  })
).subscribe(observer)