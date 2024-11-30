import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css',
})
export class NewArrivalsComponent {
  products = [
    {
      id: 1,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi1',
      price: 20000,
    },
    {
      id: 2,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi2',
      price: 20000,
    },
    {
      id: 3,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi3',
      price: 20000,
    },
    {
      id: 4,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi4',
      price: 20000,
    },
    {
      id: 5,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi5',
      price: 20000,
    },
    {
      id: 6,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi6',
      price: 20000,
    },
    {
      id: 7,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi7',
      price: 20000,
    },
    {
      id: 8,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi8',
      price: 20000,
    },
  ];
}
