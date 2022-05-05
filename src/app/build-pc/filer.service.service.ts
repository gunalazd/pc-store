import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const filters: myFilers[] = [
  {
    mainFilter: 'RAM',
    filterValues: [
      { value: '1GB', checked: false },
      { value: '8GB', checked: false },
      { value: '16GB', checked: false },
    ],
  },
  {
    mainFilter: 'CPU',
    filterValues: [
      { value: 'Intel i5', checked: false },
      { value: 'Intel i7', checked: false },
      { value: 'Intel i9', checked: false },
    ],
  },
  {
    mainFilter: 'GPU',
    filterValues: [
      { value: 'RTX 3060', checked: false },
      { value: 'RTX 3070', checked: false },
      { value: 'RTX 3070Ti', checked: false },
      { value: 'RTX 3080', checked: false },
    ],
  },
];

// const itemStock: myStockItems[] = [
//   {
//     itemCategory: 'GPU',
//     itemName: 'RTX 3060',
//     itemFilterName: 'RTX 3060',
//     itemImageUrl:
//       'https://icdn.digitaltrends.com/image/digitaltrends/graphics-card-gpu-feature-image-shutterstock-3-720x720.jpg',
//     itemPrice: 900,
//     itemInStock: true,
//   },
//   {
//     itemCategory: 'GPU',
//     itemName: 'RTX 3070',
//     itemFilterName: 'RTX 3070',
//     itemImageUrl:
//       'https://icdn.digitaltrends.com/image/digitaltrends/graphics-card-gpu-feature-image-shutterstock-3-720x720.jpg',
//     itemPrice: 1000,
//     itemInStock: false,
//   },
//   {
//     itemCategory: 'GPU',
//     itemName: 'RTX 3070Ti',
//     itemFilterName: 'RTX 3070Ti',
//     itemImageUrl:
//       'https://icdn.digitaltrends.com/image/digitaltrends/graphics-card-gpu-feature-image-shutterstock-3-720x720.jpg',
//     itemPrice: 1200,
//     itemInStock: true,
//   },
//   {
//     itemCategory: 'GPU',
//     itemName: 'RTX 3080',
//     itemFilterName: 'RTX 3080',
//     itemImageUrl:
//       'https://icdn.digitaltrends.com/image/digitaltrends/graphics-card-gpu-feature-image-shutterstock-3-720x720.jpg',
//     itemPrice: 1500,
//     itemInStock: true,
//   },
//   {
//     itemCategory: 'GPU',
//     itemName: 'RTX 3080Ti',
//     itemFilterName: 'RTX 3080Ti',
//     itemImageUrl:
//       'https://icdn.digitaltrends.com/image/digitaltrends/graphics-card-gpu-feature-image-shutterstock-3-720x720.jpg',
//     itemPrice: 2100,
//     itemInStock: true,
//   },
//   {
//     itemCategory: 'CPU',
//     itemName: 'Intel i3',
//     itemFilterName: 'Intel i3',
//     itemImageUrl:
//       'https://www.bleepstatic.com/content/hl-images/2021/01/26/Intel-CPU.jpg',
//     itemPrice: 1500,
//     itemInStock: true,
//   },
//   {
//     itemCategory: 'CPU',
//     itemName: 'Intel i5',
//     itemFilterName: 'Intel i5',
//     itemImageUrl:
//       'https://www.bleepstatic.com/content/hl-images/2021/01/26/Intel-CPU.jpg',
//     itemPrice: 1500,
//     itemInStock: true,
//   },
//   {
//     itemCategory: 'CPU',
//     itemName: 'Intel i5',
//     itemFilterName: 'Intel i5',
//     itemImageUrl:
//       'https://www.bleepstatic.com/content/hl-images/2021/01/26/Intel-CPU.jpg',
//     itemPrice: 1500,
//     itemInStock: false,
//   },
//   {
//     itemCategory: 'CPU',
//     itemName: 'Intel i7',
//     itemFilterName: 'Intel i7',
//     itemImageUrl:
//       'https://www.bleepstatic.com/content/hl-images/2021/01/26/Intel-CPU.jpg',
//     itemPrice: 1500,
//     itemInStock: false,
//   },
//   {
//     itemCategory: 'CPU',
//     itemName: 'Intel i7',
//     itemFilterName: 'Intel i7',
//     itemImageUrl:
//       'https://www.bleepstatic.com/content/hl-images/2021/01/26/Intel-CPU.jpg',
//     itemPrice: 1500,
//     itemInStock: true,
//   },
// ];

export interface myStockItems {
  itemCategory: string;
  itemName: string;
  itemFilterName: string;
  itemImageUrl: string;
  itemPrice: number;
  itemInStock: boolean;
  itemId: number;
}

export interface myFilers {
  mainFilter: string;
  filterValues: { value: string; checked: boolean }[];
}

@Injectable({
  providedIn: 'root',
})
export class BuildPcService {
  _emitter = new EventEmitter();
  rxEmitter: any;
  order: myStockItems[] = [];

  constructor(private http: HttpClient) {}

  getFilters() {
    // console.log('filters', filters);
    return filters;
  }

  updateFilters(val: boolean, i: number, y: number) {
    filters[y].filterValues[i].checked = val;
  }

  getOrder(): myStockItems[] | null {
    let localOrder = localStorage.getItem('order');
    if (localOrder) {
      // console.log(JSON.parse(localOrder));
      return JSON.parse(localOrder);
    }
    return null;
  }

  updateOrder(a: myStockItems) {
    this.order.push(a);
    localStorage.setItem('order', JSON.stringify(this.order));
  }

  addAdditionalItemtoOrder(id: number) {
    let order = this.getOrder();
    if (order) {
      let element = order.find((a) => a.itemId === id);
      if (element) {
        this.updateOrder(element);
      }
    }
  }

  removeItemFromOrder(id: number) {
    let order = this.getOrder();

    var result = order?.filter((obj) => {
      return obj.itemId === id;
    });

    if (result) {
      let indexVal = order?.indexOf(result[0]);
      if (indexVal != null && order) {
        order.splice(indexVal, 1);
        localStorage.setItem('order', JSON.stringify(order));
      }
    }
  }

  delteItemFromOrder() {}

  updateStock() {
    return this.http.get(
      'https://ng-udemy-course-e75c3-default-rtdb.europe-west1.firebasedatabase.app/item-stock.json'
    );
  }
}
