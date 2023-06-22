import { Component } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartItemsService } from 'src/cart-items.service';
import { cartItem } from 'src/interfaces';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  constructor(private cartItems: CartItemsService) {}
  cart = faCartShopping;

  cost = 125;
  count = 0;
  totalCount = 0;

  newCount(eventData: any) {
    this.count = eventData;
    this.item.count = this.count;
    this.item.total = this.cost * this.count;
  }
  items: cartItem[] = [];

  item: cartItem = {
    name: 'Fall Limited Edition Sneakers',
    cost: this.cost,
    count: this.count,
    total: this.cost * this.count,
  };

  addToCart() {
    this.totalCount += this.count;
    this.item.count = this.totalCount;
    this.item.total = this.totalCount * this.cost;
    this.items = [];
    this.items.push(this.item);
    this.cartItems.items = this.items;
    console.log(this.cartItems.items);
  }
}
