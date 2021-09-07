import {  Injectable  } from '@angular/core';
import {  Product, ProductOnBasket  } from '@app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketItems: ProductOnBasket[] = [];

  constructor() { }

  addItem(product: Product, count: number): void {
    const index = this.basketItems.findIndex(e => e.id === product.id);
    if (index > -1) {
      this.basketItems[index].count += count;
    } else {
      this.basketItems.push({ ...product, count });
    }
  }

  deleteItem(id: number): void {
   this.basketItems = this.basketItems.filter(e => e.id !== id)
  }

  editItem(id: number, count: number): void {
    const index = this.basketItems.findIndex(e => e.id === id);
    if (index > -1) {
      this.basketItems[index].count = count;
    }
  }

  getItems(): ProductOnBasket[] {
    return this.basketItems;
  }
}