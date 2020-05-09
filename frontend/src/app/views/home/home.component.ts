import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StockService} from '../../services/stock.service';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatStepper, {static: true}) stepper: MatStepper;
  stockForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private stockService: StockService) {}

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      tickers: this.fb.array([this.fb.group({ticker: ''})])
    });
  }

  submit() {
  this.isSubmitted = true;
  this.stepper.next();

  }

  get tickers() {
    return this.stockForm.get('tickers') as FormArray;
  }

  addInput() {
    this.tickers.push(this.fb.group({ticker: ''}));
  }

  deleteInput(tickerIndex: number) {
    this.tickers.removeAt(tickerIndex);
  }
}
