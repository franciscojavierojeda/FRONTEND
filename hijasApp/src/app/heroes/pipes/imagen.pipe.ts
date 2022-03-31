import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
  })
export class ImagenPipe implements PipeTransform {

  transform(heroe:Heroes): string {

    if(!heroe.id){
      return `assets/no-image.png`;
    }
    else if( heroe.alt_image){
      return heroe.alt_image;
    }
    return `assets/heroes/${heroe.id}.jpg` ;
  }

}
//assets/heroes/{{heroe.id}}.jpg