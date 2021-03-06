import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StockListService} from '../../services/stock-list.service';
import {orderBy, SortDescriptor} from '@progress/kendo-data-query';
import {GridDataResult, RowClassArgs} from '@progress/kendo-angular-grid';
import {StockService} from '../../services/stock.service';

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
  stocks: [{
    is_investable: boolean;
    stock_name: string, price: number, ticker: string, investment_needed: number, shares_need: number, is_owned: boolean}];

  gridView: GridDataResult;
  loading;
  profitWanted: number;
  constructor(private stockService: StockListService, private service: StockService) {}

  ngOnInit(): void {
    this.loading = true;
    this.stockService.getList().subscribe(res => {
      // @ts-ignore
      this.stocks = res;
      this.loadStocks();

      this.loading = false;
    });


  }

      filterOwnedStocks() {
    this.gridView.data = this.gridView.data.filter(item => item.is_owned === true);

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


  updateStock(ticker: string) {
    const payload = {
      ticker
    };
    this.service.postStock(payload).subscribe();
  }

  filterInvestableStocks() {
        this.gridView.data = this.gridView.data.filter(item => item.is_investable === true);

  }
}
