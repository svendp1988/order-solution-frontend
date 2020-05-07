import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import {RouterModule} from '@angular/router';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddItemComponent } from './add-item/add-item.component';
import { CounterComponent } from './counter/counter.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UpdateItemComponent } from './update-item/update-item.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
import {MatTableModule} from '@angular/material/table';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent,
    CounterComponent,
    ItemDetailComponent,
    UpdateItemComponent,
    HeaderComponent,
    CustomersComponent,
    AddCustomerComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        Ng2SearchPipeModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
