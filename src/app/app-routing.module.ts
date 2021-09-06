import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: 'basket',
    component: BasketComponent
  },
  {
    path: '',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
