import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  simulationForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
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
