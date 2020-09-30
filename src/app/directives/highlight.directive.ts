import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef){ 
//console.log(el);
//we can see the h1 tag

el.nativeElement.style.backgroundColor='green';
//now the background color is given for the h1 tag 

  }

}
