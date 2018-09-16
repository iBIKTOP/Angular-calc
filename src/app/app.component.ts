import { Component } from '@angular/core';
import { Calc } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = 0;
  calc = new Calc;
  sum(a, b) {
    this.result = this.calc.sum(a, b);
  }
  diff(a, b) {
    this.result = this.calc.diff(a, b);
  }
  mult(a, b) {
    this.result = this.calc.mult(a, b);
  }
  divide(a, b) {
    this.result = this.calc.divide(a, b);
  }
}
