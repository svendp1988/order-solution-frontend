import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {Createitem} from '../items/createitem';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';


const { required } = Validators;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  maxLength = 255;
  addItemForm = this.fb.group({
    name: ['', [required]],
    description: ['', [required, Validators.maxLength(this.maxLength)]],
    price: ['', [required, Validators.min(0)]],
    amountOfStock: ['', [required, Validators.min(0)]]
  });
  item: Createitem;
  descriptionCounter: number;

  constructor(private fb: FormBuilder, private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  add(item: Createitem) {
    this.itemService.addItem(item)
      .subscribe();
  }

  onSubmit() {
    this.item = this.addItemForm.value;
    this.add(this.item);
    this.goBack();
  }

  goBack() {
    this.router.navigateByUrl('/items').then(r => true);
  }

  textUpdate($event: Event) {
    // this.item.description = event.target.value;
    // this.descriptionCounter = event.target.value.length;
  }
}
