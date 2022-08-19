import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getCartItem();
  total = this.cartService.getTotalPrice();

  cartItem: CartItem | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  clearCart(){
    this.items = [];
    this.cartService.clearCart();
    this.total = 0;
  }
  
  clearItem(it: any){
    this.cartService.clearItem(it);
    this.total = this.cartService.getTotalPrice();
  }

}