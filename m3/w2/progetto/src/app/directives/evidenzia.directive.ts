import { Directive, Input, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEvidenzia]'
})
export class EvidenziaDirective {

  @Input() defaultColor: string = 'yellow';
  @Input('appEvidenzia') newColor:string = 'yellow';

  @HostBinding('style.background-color') color:string = 'yellow';

  constructor(private ref: ElementRef) { }

  ngOnInit():void{
    this.color = this.defaultColor;
  }

}
