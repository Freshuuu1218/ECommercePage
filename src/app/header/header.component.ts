import { Component, HostListener } from '@angular/core';
import {
  faBars,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { CartItemsService } from 'src/cart-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  burger = faBars;
  cartIcon = faCartShopping;
  close = faXmark;
  width = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }
  constructor(private cartItems: CartItemsService) {}
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
