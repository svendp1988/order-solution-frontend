import {
  Component,
  AfterContentInit,
  OnInit,
  ElementRef
} from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, AfterContentInit {
  public counter: number;
  public max: number;
  private _counterElement = null;

  constructor(private _elRef: ElementRef) {
  }
  public maxReached(): boolean {
    return this.max === this.counter;
  }
  public displayCounter(): boolean {
    return this._counterElement !== null;
  }
  updateCounter(event: any): void {
    if (this._counterElement !== null) {
      this.counter = this._counterElement.value.length;
    }
  }
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this._counterElement = this._elRef.nativeElement.querySelector('[maxlength]');
    if (this._counterElement !== null){
      this.max = this._counterElement.maxLength;
      this.counter = this._counterElement.value.length;
      this._counterElement.addEventListener('input', event => this.updateCounter(event), {useCapture: true});
    }
  }
}
