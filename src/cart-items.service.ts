import { Injectable } from '@angular/core';
import { cartItem } from './interfaces';
@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  items: cartItem[] = [];

  constructor() {}
}
