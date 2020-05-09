import { Component, OnInit } from '@angular/core';
import {StockListService} from '../../services/stock-list.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-save-list',
  templateUrl: './save-list.component.html',
  styleUrls: ['./save-list.component.css']
})
export class SaveListComponent implements OnInit {
  stocks: [{stock_name: string, price: number, ticker: string, investment_needed: number, shares_need: number}];
  stockSaveForm: FormGroup;
  constructor(private stockService: StockListService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.stockSaveForm = this.fb.group({
      ticker: ['', Validators.required]
    });


    this.stockService.getList().subscribe(res => {
      console.log(res)
      // @ts-ignore
      this.stocks = res;
    });
  }

  saveStock(stock) {
    this.stockService.saveStock(stock).subscribe(res => {
      // @ts-ignore
      this.stocks.push(res);
    });
  }

}
