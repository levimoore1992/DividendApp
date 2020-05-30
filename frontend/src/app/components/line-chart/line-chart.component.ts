import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getChartData();
  }



}
