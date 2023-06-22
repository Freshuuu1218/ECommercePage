import { Component } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  count = 0;
  minus = faMinus;
  plus = faPlus;
  add() {
    this.count++;
  }
  remove() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }
}
