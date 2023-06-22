import { Component } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  number = 2;
  previous = faChevronLeft;
  next = faChevronRight;
  getPrevious() {
    this.number = this.number - 1;
    if (this.number === 0) {
      this.number = 4;
    }
  }
  getNext() {
    this.number = this.number + 1;
    if (this.number === 5) {
      this.number = 1;
    }
  }
}
