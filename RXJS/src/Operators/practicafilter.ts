//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observer, range, from, fromEvent} from "rxjs";
import { filter, pluck, map } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";
import {Empleado2} from "./../Interfaces/interfaces"
// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const Empleados:Array<Empleado2> = [
  {
    id: 1,
    nombre: 'Raul',
    puesto: 'Leader Manager',
    edad: 23
  },
  {
    id: 2,
    nombre: 'Ray',
    puesto: 'Developer Sr',
    edad: 26
  },
  {
    id: 3,
    nombre: 'Eduardo',
    puesto: 'El patron',
    edad: 21
  },
  {
    id: 4,
    nombre: 'Manu',
    puesto: 'Developer Sr',
    edad: 21
  },
  {
    id: 5,
    nombre: 'Paco',
    puesto: 'Developer Sr',
    edad: 25
  },
]

// const obs$ = from(Empleados)
// obs$.pipe(
//   filter((Empleados)=> Empleados.puesto == 'Developer Sr')
// )
// .subscribe(observer)

const obs$ = from(Empleados)
obs$.pipe(
  filter((Empleados)=> Empleados.edad > 21)
)
.subscribe(observer)


/**************************************
OPERADORES EN CADENA 
*************************************/
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
keyup$.pipe(
  pluck('code'),
  filter((value)=> value === 'Enter')
  )
.subscribe(observer)