import { Pipe, PipeTransform } from '@angular/core';

export const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];

@Pipe({
  name: 'arabicNumbers',
  standalone: true
})
export class ArabicNumbersPipe implements PipeTransform {
  transform(value: string | number): string {
    return value.toString().replace(/\d/g, d => arabicDigits[+d]);
  }
}
