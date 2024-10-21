import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';  // Usaremos a função de formatação nativa do Angular

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, format: string = 'dd/MM/yyyy, HH:mm'): string {
    if (!value) return '';
    return formatDate(value, format, 'en-US');  // Usa a função de formatação do Angular
  }

}