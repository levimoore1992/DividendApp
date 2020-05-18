import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StockListService} from '../../services/stock-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {orderBy, SortDescriptor} from '@progress/kendo-data-query';
import {GridDataResult, RowClassArgs} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-save-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './save-list.component.html',
  styleUrls: ['./save-list.component.css']
})
export class SaveListComponent implements OnInit {
  multiple = true;
  sort: SortDescriptor[] = [{
    field: 'ex_div_date',
    dir: 'desc'
  }];
  stocks: [{stock_name: string, price: number, ticker: string, investment_needed: number, shares_need: number}];

  gridView: GridDataResult;
  loading;
  profitWanted: number;
  constructor(private stockService: StockListService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loading = true;
    this.stockService.getList().subscribe(res => {
      // @ts-ignore
      this.stocks = res;
      this.loadStocks();

      this.loading = false;
    });


  }

      sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadStocks();
    }

        loadStocks(): void {
        this.gridView = {
            data: orderBy(this.stocks, this.sort),
            total: this.stocks.length
        };
    }

    isInvestable(context: RowClassArgs) {
    const row = context.dataItem.is_investable;
    return {
      green: row,
      red: !row
    };

    }


}
