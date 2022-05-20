import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './containers/checkout-page/checkout-page.component';
import { CoctailDetailsComponent } from './containers/coctail-details/coctail-details.component';
import { CoctailsListComponent } from './containers/coctails-list/coctails-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: CoctailsListComponent
  },
  {
    path: ':id/details',
    component: CoctailDetailsComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
