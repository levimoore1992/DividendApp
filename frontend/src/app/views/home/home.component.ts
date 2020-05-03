import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StockService} from '../../stock.service';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatStepper, {static: true}) stepper: MatStepper;
  stockData: {name: string, shares_needed: number, investment_needed: number };
  stockForm: FormGroup;
  isSubmitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private stockService: StockService) {}

  ngOnInit(): void {
    this.stockForm = this.fb.group({
      ticker: ['', Validators.required]
    });
  }

  submit() {
    this.loading = true;
    const payload = {
      ticker: this.stockForm.get('ticker').value
    };

    this.stockService.postStock(payload).subscribe(res => {
      // @ts-ignore
      this.stockData = res;
      this.loading = false;
      this.isSubmitted = true;
      this.stepper.next();
    });

  }

}
