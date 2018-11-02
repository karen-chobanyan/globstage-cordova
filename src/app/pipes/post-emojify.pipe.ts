import {Pipe, PipeTransform} from '@angular/core';

/*
 * Transforms common emoji text to UTF encoded emojis
*/
@Pipe({name: 'postemojify'})
export class PostEmojifyPipe implements PipeTransform {

  transform(message: string, pipeEnabled: boolean): string {
    let re = /(\*+)(\d*)(\*)/g;
    message = message.replace(re, '<img src="/assets/imgs/smiles/' + '$2' + '.png">');

    return message;
  }

}
