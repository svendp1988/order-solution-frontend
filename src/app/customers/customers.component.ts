import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  columnsToDisplay = ['id', 'firstname', 'lastname', 'finalRow'];
  searchText;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    return this.customerService.getCustomers().subscribe(customers => this.customers = customers);  }
}
