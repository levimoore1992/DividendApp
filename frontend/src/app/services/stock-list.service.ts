import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockListService {

  constructor(private http: HttpClient) { }


  getList() {
    return this.http.get(`${environment.api}api/save-list`);
  }


  getChart(ticker) {
    return this.http.post(`${environment.api}api/scraper`, ticker);
  }
}
