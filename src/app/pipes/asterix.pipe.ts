import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    const v = ['a', 'e', 'u', 'i', 'o', 'y'];
    let result = "";
    for (let i = 0; i < ch.length; i++) {
      let temp = ch[i];
      for (let j = 0; j < v.length; j++) {
              if (ch[i].toLowerCase()== v[j]) {
                temp = "*";
                break;
              }
      }
      result = result + temp;
    }    
    return result;
  }

}
