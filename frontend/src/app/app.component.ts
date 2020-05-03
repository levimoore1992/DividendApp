import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {StockService} from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock';
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
      this.loading = false
    });
  }
}
