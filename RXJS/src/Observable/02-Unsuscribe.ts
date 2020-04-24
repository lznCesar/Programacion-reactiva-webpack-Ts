//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observable, Observer, Subscriber } from "rxjs";
import { displayLog } from "./Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => console.log("[Complete]"),
};

const intervalo$ = new Observable((subscriber) => {
  let count = 0;
  // setIntevals nos ayuuda a repetir una funcion cada cierto tiempo
  const interval = setInterval(() => {
    count++;
    subscriber.next(count);
    console.log(count);
    
  }, 1000);

  // setTimeout(() => {
  //   subscriber.complete()
  // }, 2500);

  return ()=> {
    clearInterval(interval)
    console.log('interval destruido');
    
  }
});

// cuando ponemos un subscribe dentro de una constante esa constante
// se convierte del tipo suscribe por lo tanto 
const subs1 = intervalo$.subscribe(observer);
// const subs2 = intervalo$.subscribe(observer);

setTimeout(() => {
  // la tarea del unsubscribe es aparte de quitar la subscripcion es 
  // retornar un return 
  subs1.unsubscribe()
  console.log('se ejecuto el unsusbcribe');
  
}, 3000);