import { EventEmitter, Injectable } from '@angular/core';
import { Product,products } from './product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems: Product[] = [];
  totalprice = 0;
  amount = 0;
  event: EventEmitter<null> = new EventEmitter();

  constructor() { }

  notifyDataChange() {
    this.event.emit();
  }

  addToCart(p: Product) {
    let header = -1;
    header = this.cartitems.findIndex(itemlist => itemlist.id === p.id);
    if(header != -1){
      this.cartitems[header].amount+=1
    }else if(header === -1){
      this.cartitems.push(p);
    }
    this.result();
    this.notifyDataChange();
  }

  getCartItem() {
    return this.cartitems;
  }

  getCartItemCount() {
    return this.cartitems.length;
  }

  getTotalPrice() {
    this.result();
    return this.totalprice;
  }

  clearCart() {
    this.cartitems = [];
    this.totalprice = 0;
    return this.cartitems;
  }

  clearItem(it: any){
    let header = this.cartitems.findIndex(itemlist => {
      itemlist.id === it.id
    });
    this.cartitems.splice(header,1)
    this.result();
  }

  result():void{
    this.amount = 0;
    this.totalprice = 0;
    this.cartitems.map(p => {
      this.totalprice += p.price * p.amount
    });
    console.log(this.totalprice);
  }
}