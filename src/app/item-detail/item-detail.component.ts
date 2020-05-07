import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../items/item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location,
    private router: Router
              ) { }

  ngOnInit(): void {
    this.getItem();
  }

  private getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }
}
