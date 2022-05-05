import { Component, OnInit } from '@angular/core';
import { BuildPcService, myFilers } from '../filer.service.service';


@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.scss'],
})
export class TypeSelectorComponent implements OnInit {


  constructor(private filterService: BuildPcService) {}

  filters: myFilers[] = [];

  ngOnInit(): void {
   this.filters = this.filterService.getFilters();
  }

  toggleShowSection($element: HTMLDivElement): void {
    let elementClass = $element.classList;
    if (elementClass.contains('show')) {
      elementClass.remove('show');
    } else {
      elementClass.add('show');
    }
  }

  onCheckboxChange(e: any, i: number, y: number) {
    this.filterService.updateFilters(e.target.checked? true : false, i, y)
  }
}
