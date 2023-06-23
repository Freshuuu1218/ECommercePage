import { Component, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { CartItemsService } from 'src/cart-items.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  clear = faTrashCan;
  cost = 125;
  count = 1;
  constructor(private cartItems: CartItemsService) {}
  items = this.cartItems.items;
  empty: boolean = true;
  ngOnInit() {
    if (this.items.length > 0) {
      this.empty = false;
    } else {
      this.empty = true;
    }
  }
  removeFormCart() {
    this.items[0].count = 0;
    this.items = [];
    this.cartItems.items = [];
    this.empty = true;
    this.cartItems.clearCart = true;
  }
}
