import { Component, OnInit } from '@angular/core';
import { BuildPcService } from '../build-pc/filer.service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private buildPcService: BuildPcService) { }

  ngOnInit(): void {
  }

  getOrderCount(){
    let order = this.buildPcService.getOrder();
    if (order){
      return order.length
    } else return 0
  }

}
