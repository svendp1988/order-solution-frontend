import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from '../item.service';
import {StockUrgency} from './stockurgency';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  getItem(id: string): void {

  }

  // setCorrectImage(): void {
  //   document.getElementById('stockUrgency').src = "../../assets/img/red.png";
  // }
}
