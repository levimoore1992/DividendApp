import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockService {


  constructor(private http: HttpClient) { }

  postStock(payload) {

    return this.http.post('http://127.0.0.1:80/api/dividends', payload);
  }

  getDividendData(payload){
        return this.http.post('http://127.0.0.1:80/api/dividend-data', payload);

  }


  getChartData() {

  return this.http.get('http://127.0.0.1:80/api/chart-data');
  }
}
