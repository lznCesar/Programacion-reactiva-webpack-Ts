//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, of } from "rxjs";
import { displayLog } from "./Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const obs$ = of<any>(...[1,2,3,4,5]);

obs$.subscribe(observer);
