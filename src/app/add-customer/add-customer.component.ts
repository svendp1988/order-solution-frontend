import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';


const { required } = Validators;

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  maxLength = 255;
  addCustomerForm = this.fb.group({
    name: ['', [required]],
    description: ['', [required, Validators.maxLength(this.maxLength)]],
    price: ['', [required, Validators.min(0)]],
    amountOfStock: ['', [required, Validators.min(0)]]
  });
  descriptionCounter: number;
  // customer: CreateCustomer;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  // add(customer: ) {
  //   this.customerService.addCustomer(customer)
  //     .subscribe();
  // }
  //
  onSubmit() {
  //   this.customer = this.addCustomerForm.value;
  //   this.add(this.customer);
  //   this.goBack();
  }

  goBack() {
    this.router.navigateByUrl('/customers').then(r => true);
  }

  textUpdate($event: Event) {
    // this.item.description = event.target.value;
    // this.descriptionCounter = event.target.value.length;
  }
}
