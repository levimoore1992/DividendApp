import {Component, Input, OnInit} from '@angular/core';
import {StockService} from '../../../stock.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() ticker;
  stockData;
  loading: any;
  error: string;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {

    this.loading = true;
    const payload = this.ticker; // {ticker:'ARR'}
    this.stockService.postStock(payload).subscribe(res => {
      // @ts-ignore
      if (res.error) {
        // @ts-ignore
        this.error = res.error;
        this.loading = false;
      } else {
        this.stockData = res;
        this.loading = false;
      }
    });
  }

}
