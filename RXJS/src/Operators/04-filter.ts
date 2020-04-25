//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, range} from "rxjs";
import { filter } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${value}`,),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const src$ = range(1,10);
src$.pipe(
  filter((value)=> value % 2 === 1)
)
.subscribe(observer)