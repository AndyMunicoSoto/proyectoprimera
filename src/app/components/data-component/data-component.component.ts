// components/data.component.ts
import { Component } from '@angular/core';
import { DataModel } from 'src/app/models/data-model';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css'],
})
export class DataComponent {
  newData: DataModel = new DataModel(0, '', 0);
  filterKeyword: string = '';

  constructor(private dataService: DataService) {}

  registerData(): void {
    this.dataService.addData(this.newData);
    this.newData = new DataModel(0, '', 0);
  }

  getFilteredData(): DataModel[] {
    return this.dataService.filterData(this.filterKeyword);
  }

  calculateTotal(): number {
    return this.dataService.calculateSum();
  }
}
