import { Pipe, PipeTransform } from '@angular/core';
import {StockListService} from '../services/stock-list.service';

@Pipe({
  name: 'getDividendTable'
})
export class GetDividendTablePipe implements PipeTransform {
constructor(private stockService: StockListService) {}
  transform(value: unknown, ...args: unknown[]): unknown {
  return this.getDividendTable(value);
  }

    getDividendTable(ticker) {
    const payload = {
      ticker
    };
    this.stockService.getChart(payload).subscribe(res => {
      console.log(res);
      return res;
    });
  }

}
