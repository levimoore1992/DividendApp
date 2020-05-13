import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockListService {

  constructor(private http: HttpClient) { }


  getList() {
    return this.http.get('http://localhost:80/api/save-list');
  }

  saveStock(payload) {
    return this.http.post('http://127.0.0.1:80/api/dividends', payload);
  }

  getChart(ticker){
    return this.http.post('http://127.0.0.1:80/api/scraper', ticker);
  }
}
