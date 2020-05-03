import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StockService} from '../../stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stockData: {name: string, shares_needed: number, investment_needed: number };
  stockForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private stockService: StockService) {}

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      ticker: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    this.loading = true;
    const payload = {
      ticker: this.stockForm.get('ticker').value
    };

    this.stockService.postStock(payload).subscribe(res => {
      // @ts-ignore
      this.stockData = res;
      this.loading = false;
    });
  }

}
