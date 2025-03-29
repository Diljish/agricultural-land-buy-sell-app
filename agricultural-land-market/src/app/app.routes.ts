import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyLandComponent } from './buy-land/buy-land.component';
import { SellLandComponent } from './sell-land/sell-land.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buy-land', component: BuyLandComponent },
  { path: 'sell-land', component: SellLandComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];