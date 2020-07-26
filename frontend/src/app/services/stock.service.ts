import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {


  constructor(private http: HttpClient) { }

  postStock(payload) {
    return this.http.post(`${environment.api}api/dividends`, payload);
  }

  getDividendData(payload) {
        return this.http.post<{amount: number, month: string}>(`${environment.api}api/dividend-data`, payload);
  }


  getChartData() {
  return this.http.get(`${environment.api}api/chart-data`);
  }

  getCalendarData() {

    const headers = {
      'Content-Type': 'text/html'
    };

    const requestOptions = {
      headers: new HttpHeaders(headers)
    };

    return this.http.get(`${environment.api}api/calendar-data`, requestOptions);
  }

  getOwnedStocks() {
    return this.http.get(`${environment.api}api/owned-stocks`);
  }
}
