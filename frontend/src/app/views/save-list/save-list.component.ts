import { Component, OnInit } from '@angular/core';
import {StockListService} from '../../services/stock-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SortDescriptor, orderBy} from '@progress/kendo-data-query';
import {GridDataResult} from '@progress/kendo-angular-grid';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-save-list',
  templateUrl: './save-list.component.html',
  styleUrls: ['./save-list.component.css']
})
export class SaveListComponent implements OnInit {
  multiple = true;
  sort: SortDescriptor[] = [{
    field: 'investment_needed',
    dir: 'asc'
  }]
  stocks: [{stock_name: string, price: number, ticker: string, investment_needed: number, shares_need: number}];
  stockSaveForm: FormGroup;
  error: string;
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


    this.stockSaveForm = this.fb.group({
      profitWanted: ['', Validators.required],
      ticker: ['', Validators.required]
    });

  }
  get ticker() {
    return this.stockSaveForm.get('ticker').value;
  }

  saveStock() {
    this.error = null;

    const payload = {
      ticker: this.ticker
    };

    this.stockService.saveStock(payload).subscribe(res => {

      // @ts-ignore
      if (res.error) {
        this.error = 'We werent able to get or update that stock';
      } else {
              // @ts-ignore
      this.stocks.push(res);
      }

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

}
