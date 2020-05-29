import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  postStock(payload) {
    return this.http.post('http://127.0.0.1:80/api/dividends', payload);
  }

  getPortfolio(){
    return this.http.get('http://127.0.0.1:80/api/portfolio');
  }
}
