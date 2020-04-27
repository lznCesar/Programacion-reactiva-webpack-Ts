import { Observer, of, fromEvent, interval, from } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const numeros$ = of(1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 1, 2, 3);

/*******************distinc*******************
distinc solamente imprime los elementos una sola vez aun que esten
repetidos 100 veces solamente una sola vez 
*************************************/

/*******************dintincUnitlChanged*******************
imprime los valores hasta que se presenta un cambio, siempre compara
con el valor anterior y si es difrente lo envia al observable
*************************************/
numeros$.pipe(distinctUntilChanged());
// .subscribe(observer)

interface personajes {
  nombre: string;
}

const personajes: Array<personajes> = [
  {
    nombre: "Marcus",
  },
  {
    nombre: "Dom",
  },
  {
    nombre: "Cole",
  },
  {
    nombre: "Bird",
  },
  {
    nombre: "Cole",
  },
  {
    nombre: "Ania",
  },
  {
    nombre: "Dom",
  },
  {
    nombre: "Ania",
  },
  {
    nombre: "Dom",
  },
  {
    nombre: "Bird",
  },
];

// from(personajes)
//   .pipe(
//     distinctUntilChanged(
//       (anterior, actual) => anterior.nombre === actual.nombre
//     )
//   )
//   .subscribe(observer);

/**************************************
 distinctUntilKeyChanged('objeto por el cual queremos evaluar')
 al igual quel distintct solo dejara pasar al observable si son 
 diferentes
*************************************/

from(personajes)
  .pipe(
    distinctUntilKeyChanged('nombre')
  )
  .subscribe(observer);
