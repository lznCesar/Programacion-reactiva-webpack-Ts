//siempre que veamos esta insturccion es que importamos
// algo para poder crear un observable.

import { Observable, Observer } from "rxjs";
import { displayLog } from "./../Utils/utils";

// cuando se le agrega el signo de dolar al final de una constante es para
// remarcar que esa constante es un observable.

const observer:Observer<any> = {
  next: value => displayLog(`[Next]  ${JSON.stringify(value)}`),
  error:(error) => console.error('[Error Observable] ', error),
  complete: ()=> console.log('[Complete]')

}

// const obs$ = Observable.create esta no se utiliza

const obs$ = new Observable((subscriber) => {
  subscriber.next("Hola mundo")
  subscriber.next(['motherfucker'])
  subscriber.next({R:1,C:2})
  
  //forzando un error
//   const a:any = undefined;
//   a.nombre = 'Cesar Emmanuel'
  
//   subscriber.next('Paso Error')

subscriber.complete()
subscriber.next('xyz')
});
// simpre el primer parametro es para la información que se envia desde
// de dato de next
// el segundo callback es para los errores 
// el tercero es para el complete


// el .subscriber es para suscribirse a un observable
obs$.subscribe(observer);