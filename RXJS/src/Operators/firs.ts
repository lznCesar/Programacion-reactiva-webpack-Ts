import { Observer, of, fromEvent } from "rxjs";
import { map, pluck, mapTo, take, first, tap } from "rxjs/operators";
import { displayLog } from "./../Utils/utils";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${value}`),
  error: (error) => console.error("[Error Observable] ", error),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");

// click$
//   .pipe(
//     tap(() => console.log("tap")),
//     pluck("clientX"),
//     first((clientX) => clientX > 150)
//     // first deja pasar solamente una actividad lo podemos utilizar
//     // vacio first(), o lo podemos utilizar que solo muestre con una
//     // condición.
//     )
//     .subscribe((value) => console.log(value));
    
    click$
      .pipe(
        tap(() => console.log("tap")),
        first((event) => event.clientX > 350),
        map (({clientX, clientY})=> ({clientX, clientY}))
        )
        .subscribe((value) => console.log(value));

        /*******************MAP*******************
        map((event)=>{
          return{
            clientX:event.clientX
            clientY:event.clientY
          }
        })
        *************************************/
        