import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarHTML;
  constructor(private stockService: StockService) { }

  ngOnInit() {
  this.stockService.getCalendarData().subscribe(res => {
    this.calendarHTML = res;
  });
  }

}
