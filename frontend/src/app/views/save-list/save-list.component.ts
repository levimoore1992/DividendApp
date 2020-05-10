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
  error: string;
  constructor(private stockService: StockListService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.stockSaveForm = this.fb.group({
      ticker: ['', Validators.required]
    });


    this.stockService.getList().subscribe(res => {
      console.log(res);
      // @ts-ignore
      this.stocks = res;
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

}
