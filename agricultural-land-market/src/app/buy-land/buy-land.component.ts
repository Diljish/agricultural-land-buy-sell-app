import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-land',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-land.component.html',
  styleUrl: './buy-land.component.css'
})
export class BuyLandComponent {
  
    lands = [
      { title: 'Farm 1', description: '10 acres of fertile land.', price: '$50,000' },
    { title: 'Farm 2', description: '20 acres with irrigation.', price: '$100,000' },
    { title: 'Farm 3', description: '10 acres of fertile land.', price: '$50,000' },
    { title: 'Farm 4', description: '20 acres with irrigation.', price: '$100,000' },
    { title: 'Farm 5', description: '10 acres of fertile land.', price: '$50,000' },
    { title: 'Farm 6', description: '20 acres with irrigation.', price: '$100,000' },
    { title: 'Farm 7', description: '10 acres of fertile land.', price: '$50,000' },
    { title: 'Farm 8', description: '20 acres with irrigation.', price: '$100,000' }
    ];
  
}
