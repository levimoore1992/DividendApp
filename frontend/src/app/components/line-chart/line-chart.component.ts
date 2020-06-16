import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() valueArray: any;
  @Input() monthArray: any;

  constructor() { }

  ngOnInit(): void {}



}
