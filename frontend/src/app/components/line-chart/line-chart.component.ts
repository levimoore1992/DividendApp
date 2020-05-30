import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() tickers: [string];
  months: [any];
  chartData: any;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.tickers.currentValue.ticker)
    changes.tickers.currentValue.map(item => {
      this.stockService.getChartData(item.ticker).subscribe(res => {
        let  x = 1
      })
    });

  }

}
