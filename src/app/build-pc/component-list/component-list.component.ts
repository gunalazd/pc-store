import { Component, OnInit } from '@angular/core';
import { BuildPcService, myStockItems } from '../filer.service.service';

export interface myFilers {
  mainFilter: string;
  filterValues: { value: string; checked: boolean }[];
}

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  itemStock: any;
  order: number[] = [];

  constructor(private buildPcService: BuildPcService) {}

  ngOnInit(): void {
    // this.itemStock = this.buildPcService.getItemStock();
    this.buildPcService.updateStock().subscribe((a) => (this.itemStock = a));
    console.log(this.itemStock);
  }

  getActiveFilter() {
    let filterList: string[] = [];

    let myList: myFilers[] = this.buildPcService.getFilters();

    myList.filter((a) =>
      a.filterValues.filter((b) => {
        if (b.checked === true) {
          filterList.push(b.value);
        }
      })
    );

    // console.log('thisArray', filterList);

    return filterList;
  }

  showItem(item: string) {
    if (this.getActiveFilter().length === 0) {
      return false;
    }
    let foundItems = this.getActiveFilter().filter((a) => a === item);
    console.log('foundItems', foundItems);
    return foundItems.length != 0 ? false : true;
  }

  updateStockInfo() {
    console.log('update stock info');
    this.buildPcService.updateStock();
  }

  addToOrder(id: myStockItems) {
    let element = document.getElementById(id.itemId.toString());

    element?.classList.add('loader');
    setTimeout(() => {
      this.buildPcService.updateOrder(id);
      // console.log(this.buildPcService.getOrder());
      let element2 = document.querySelector('.loading-element.loader ~div');
      element2?.classList.add('success');
      element?.classList.remove('loader');
    }, 500);
  }

  getOrderCount(id: number) {
    let order = this.buildPcService.getOrder();
    // console.log('getOrderCount', order);
    if (order) {
      return order.filter((a) => a.itemId === id).length;
    } else return 0;
  }
}
