import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import {AddItemComponent} from './add-item/add-item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {UpdateItemComponent} from './update-item/update-item.component';
import { CustomersComponent } from './customers/customers.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'detail/:id', component: ItemDetailComponent },
  { path: 'update/:id', component: UpdateItemComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'addCustomer', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
