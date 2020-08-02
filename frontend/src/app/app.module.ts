import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { ResultsComponent } from './views/home/results/results.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { SaveListComponent } from './views/save-list/save-list.component';
import {MatListModule} from '@angular/material/list';
import {BodyModule, ExcelModule, GridModule, SharedModule} from '@progress/kendo-angular-grid';
import { GetDividendTablePipe } from './pipes/get-dividend-table.pipe';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import {CalendarComponent} from './views/calendar/calendar.component';
import {CalendarModule, DatePickerModule} from '@progress/kendo-angular-dateinputs';
import 'hammerjs';
import {ButtonModule} from "@progress/kendo-angular-buttons";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ResultsComponent,
    SaveListComponent,
    GetDividendTablePipe,
    PortfolioComponent,
    LineChartComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatIconModule,
    MatListModule,
    GridModule,
    SharedModule,
    BodyModule,
    FormsModule,
    ExcelModule,
    ChartsModule,
    CalendarModule,
    DatePickerModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
