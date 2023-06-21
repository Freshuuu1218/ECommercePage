import { Component } from '@angular/core';
import {
  faBars,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  burger = faBars;
  cartIcon = faCartShopping;
  close = faXmark;

  menu: boolean = false;
  showMenu() {
    this.cart = false;
    this.menu = !this.menu;
  }
  cart: boolean = false;
  showCart() {
    this.cart = !this.cart;
  }
}
