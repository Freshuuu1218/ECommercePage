import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  clear = faTrashCan;
  cost = 125;
  count = 1;

  // items: cartItem[] = [
  //   {
  //     name: 'Fall Limited Edition Sneakers',
  //     cost: this.cost,
  //     count: this.count,
  //     total: this.cost * this.count,
  //   },
  // ];
}
