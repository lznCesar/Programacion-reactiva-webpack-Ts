
import { Observer, of,} from "rxjs";
import { map, pluck, mapTo, take } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${value}`,),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const numeros$ = of(1,2,3,4,5);


/// toma solo algunos numeros que le pasemos en su posición despues del
// parentesis
numeros$.pipe(
  take(2)).subscribe(observer)
