import { Component, HostListener, OnInit } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  number = 1;
  previous = faChevronLeft;
  next = faChevronRight;
  width = 0;
  ngOnInit(): void {
    this.width = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
  // mobile
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

  // desktop
  changeImage(id: number) {
    this.number = id;
    let images = document.querySelectorAll('.imageSmall');
    images.forEach((image) => {
      image.classList.remove('clicked');
    });
    images[id - 1].classList.add('clicked');
  }
}
