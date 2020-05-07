import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Item} from '../items/item';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemService} from '../item.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  @Input() item: Item;
  maxLength = 255;
  updateItemForm = this.fb.group({
    name: ['', []],
    description: ['', [Validators.maxLength(this.maxLength)]],
    price: ['', [Validators.min(0)]],
    amountOfStock: ['', [Validators.min(0)]]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  onSubmit(): void {
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  private goBack() {
    this.location.back();
  }
}
