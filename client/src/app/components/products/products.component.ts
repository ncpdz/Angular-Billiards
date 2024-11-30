import { Component, inject } from '@angular/core';
import { ProductItemComponent } from "../product-item/product-item.component";
import { url } from 'inspector';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router} from "@angular/router";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // router = new Router();
  // router = inject(Router);
  constructor(private router: Router){}
  products = [
    {
      id: 1,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi1',
      price: 20000,
      isSave: false,
    },
    {
      id: 2,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi2',
      price: 20000,
      isSave: false,
    },
    {
      id: 3,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi3',
      price: 20000,
      isSave: false,

    },
    {
      id: 4,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi4',
      price: 20000,
      isSave: false,

    },
    {
      id: 5,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi5',
      price: 20000,
      isSave: false,

    },
    {
      id: 6,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi6',
      price: 20000,
      isSave: false,

    },
    {
      id: 7,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi7',
      price: 20000,
      isSave: false,

    },
    {
      id: 8,
      url: 'https://pagedone.io/asset/uploads/1700731972.png',
      name: 'Phi8',
      price: 20000,
      isSave: false,

    }
  ]
  searchText: string = "";
  filteredProducts = this.products;

  onSearch(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getData(data: any){
    console.log(data);
    let index = this.products.findIndex((item) =>{
      return item.id === data.id;
    })
    this.products[index].isSave = data.isSave;

    this.router.navigate(['/products'], {
      queryParams: { q : 'popular' },
    });
  }
}
