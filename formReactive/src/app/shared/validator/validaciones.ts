import { FormControl } from "@angular/forms";

export const nombreYApellido:string='([a-zA-Z]+) ([a-zA-Z]+)';
 export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


//   export const errorUsuario=(control: FormControl) =>{
//     const valor=control.value?.trim().toLowerCase();
//     if(valor==='strider'){
//     console.log(valor);
//       return '1'
//     }
//     return null;
//   }
