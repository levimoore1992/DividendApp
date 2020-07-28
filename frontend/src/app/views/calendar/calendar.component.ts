import {Component, OnInit} from '@angular/core';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  calendarHTML;
  public value: Date = new Date();
  showRows = false;
  loading: boolean;
  stockList;
  constructor(private stockService: StockService) { }

  ngOnInit() {
  this.stockService.getCalendarData().subscribe(res => {
    this.calendarHTML = res;
  });
  }

  onChange($event: Date) {
    this.showRows = true;
    this.loading = true;
    const date = this.handleDate($event);
    this.stockService.getDateData(date).subscribe(res => {
      this.stockList = res;
      this.loading = false;
    });
  }

  handleDate(data) {
    let month = data.getMonth() + 1;
    month  = month.toString().length < 2 ? `0${month}` : month;
    let day = data.getDay();
    day  = day.toString().length < 2 ? `0${day}` : day;
    const year = data.getFullYear();
    return year + '-' + month + '-' + day;
  }

  addToStocks(ticker) {
    const payload = {ticker};
    this.stockService.postStock(payload).subscribe();
  }
}
