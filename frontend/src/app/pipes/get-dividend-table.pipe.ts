import { Pipe, PipeTransform } from '@angular/core';
import {StockListService} from '../services/stock-list.service';

@Pipe({
  name: 'getDividendTable'
})
export class GetDividendTablePipe implements PipeTransform {
constructor(private stockService: StockListService) {}
 transform(value: unknown, ...args: unknown[]): any {
  return this.getDividendTable(value);
  }

    getDividendTable(ticker) {
    const payload = {
      ticker
    };
    return this.stockService.getChart(payload);
  }

}
