// services/data.service.ts
import { Injectable } from '@angular/core';
import { DataModel } from '../models/data-model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: DataModel[] = [];

  addData(item: DataModel): void {
    this.data.push(item);
  }

  getAllData(): DataModel[] {
    return this.data;
  }

  filterData(keyword: string): DataModel[] {
    return this.data.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  calculateSum(): number {
    return this.data.reduce((sum, item) => sum + item.value, 0);
  }
}
