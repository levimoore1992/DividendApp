import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {SaveListComponent} from './views/save-list/save-list.component';
import {PortfolioComponent} from './views/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'save-list', component: SaveListComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
