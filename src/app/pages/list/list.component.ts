import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '@app/interfaces/product';
import {BasketService} from '@app/services/basket.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  list: Product[] = [
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
    {
      id: 1,
      description: '11',
      price: 100
    },
  ];

  constructor(private basketService: BasketService, private router: Router) { }

  addItemToBasket(product: Product, count: number): void {
    this.basketService.addItem(product, count);
    this.router.navigate(['/basket']);
  }
}


