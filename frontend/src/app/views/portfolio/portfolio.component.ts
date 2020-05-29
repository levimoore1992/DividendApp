import { Component, OnInit } from '@angular/core';
import {StockService} from "../../services/stock.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  stocks;
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getPortfolio().subscribe(res => {
      console.log(res)
      this.stocks = res;
    });
  }

}
