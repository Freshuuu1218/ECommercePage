import { Component, EventEmitter, Output } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss'],
})
export class CountComponent {
  @Output() howMany = new EventEmitter<number>();

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
  newCount(value: number) {
    this.howMany.emit(value);
  }
}
