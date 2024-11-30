import { Component } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { url } from 'inspector';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemProductComponent } from "../item-product/item-product.component";

@Component({
  selector: 'app-products-hot',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, FormsModule, ItemProductComponent],
  templateUrl: './products-hot.component.html',
  styleUrl: './products-hot.component.css'
})
export class ProductsHotComponent {
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
    }
  ]
  searchText: string = "";
  filteredProducts = this.products;

  onSearch(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
