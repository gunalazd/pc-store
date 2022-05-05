import { Component, OnInit } from '@angular/core';
import {
  BuildPcService,
  myStockItems,
} from '../build-pc/filer.service.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
})
export class MyOrderComponent implements OnInit {
  constructor(private buildPcService: BuildPcService) {}
  itemStock: any = [];
  uniqueStock: any = [];

  ngOnInit(): void {
    this.itemStock = this.buildPcService.getOrder();

    if (this.itemStock) {
      this.uniqueStock = Array.from(
        new Set(this.itemStock.map((a: myStockItems) => a.itemId))
      ).map((id) => {
        return this.itemStock.find((a: myStockItems) => a.itemId === id);
      });
    }
    console.log('this.uniqueStock', this.uniqueStock);
  }

  getSelectedItems() {}

  getOrderList(item: myStockItems) {
    let order = this.buildPcService.getOrder();
    // if (order) {
    //   if (order.filter((a) => a.itemId === id).length > 0) {
    //   }
    // }

    return order;
  }

  getOrderCount(id: number) {
    let order = this.buildPcService.getOrder()?.filter((a) => a.itemId === id);
    // console.log('order info', order);
    if (order) {
      return order.length;
    } else return 0;
  }

  addOrderItem(id: number) {
    this.buildPcService.addAdditionalItemtoOrder(id);
  }

  removeOrderItem(id: number) {
    this.buildPcService.removeItemFromOrder(id)
  }

  deleteOrderItem() {}
}
