import { Component, EventEmitter, Output } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  close = faXmark;
  previous = faChevronLeft;
  next = faChevronRight;
  number = 1;
  @Output() gallery = new EventEmitter<boolean>();
  getPrevious() {
    this.number = this.number - 1;
    if (this.number === 0) {
      this.number = 4;
    }
    this.changeImage(this.number);
  }
  getNext() {
    this.number = this.number + 1;
    if (this.number === 5) {
      this.number = 1;
    }
    this.changeImage(this.number);
  }
  changeImage(id: number) {
    this.number = id;
    let images = document.querySelectorAll('.imageSmall');
    images.forEach((image) => {
      image.classList.remove('clicked');
    });
    images[id - 1].classList.add('clicked');
  }
  closeGallery(value: boolean) {
    this.gallery.emit(value);
  }
}
