import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  simulationForm: FormGroup;
  valueArray: any;
  monthArray: any;
  constructor(private fb: FormBuilder, private stockService: StockService) { }


  ngOnInit(): void {

    this.stockService.getChartData().subscribe(res => {
      this.monthArray = Object.keys(res);
      this.valueArray = Object.values(res);
    });

    this.simulationForm = this.fb.group({
      ticker: [null, Validators.required],
      shares: [null, Validators.required],
    });
  }

  get ticker() {
    return this.simulationForm.get('ticker').value;
  }

  get shares() {
    return this.simulationForm.get('shares').value;
  }

  submitForm() {

  }
}
