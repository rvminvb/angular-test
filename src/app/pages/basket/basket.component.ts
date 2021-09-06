import {  Component, OnInit } from '@angular/core';
import {  BasketService } from '@app/services/basket.service';
import {  ProductOnBasket  } from '@app/interfaces/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.sass']
})
export class BasketComponent implements OnInit {
  basketItems: ProductOnBasket[] = [];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketItems = this.basketService.getItems();
  }

  deleteItem(id: number): void {
    this.basketService.deleteItem(id);
    this.ngOnInit();
  }

  editItem(id: number, count: number): void {
    if (count) {
      this.basketService.editItem(id, count);
      this.ngOnInit();
    }
  }
}