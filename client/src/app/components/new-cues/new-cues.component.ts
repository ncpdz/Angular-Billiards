import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemNewCuesComponent } from '../item-new-cues/item-new-cues.component';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-new-cues',
  standalone: true,
  imports: [FormsModule, CommonModule, ItemNewCuesComponent],
  templateUrl: './new-cues.component.html',
  styleUrl: './new-cues.component.css',
})
export class NewCuesComponent implements OnInit {
  // productsNew = [
  //   {
  //     id: 1,
  //     name: "Chuôi Predator P3 Gold Racer No Wrap",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/87-86870f11-1d5d-4f20-829b-bf24a9d45731.jpg?v=1727684451780",
  //     price: 24300000,
  //   },
  //   {
  //     id: 2,
  //     name: "Chuôi Predator K Series Classic 2-4",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/17-chuoi-predator-k-series-classic-2-4.jpg?v=1731118429673",
  //     price: 23000000,
  //   },
  //   {
  //     id: 3,
  //     name: "Chuôi Predator Throne3 5 Pool Cue",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/43.jpg?v=1727340844153",
  //     price: 46000000,
  //   },
  //   {
  //     id: 4,
  //     name: "Chuôi Predator Throne3 4 Pool Cue",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/7-chuoi-predator-throne3-3-pool-cue-full.jpg?v=1725961048633",
  //     price: 47500000,
  //   },
  //   {
  //     id: 5,
  //     name: "Chuôi Predator Throne3 3 Pool Cue",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/7-chuoi-predator-throne3-3-pool-cue-full.jpg?v=1725961048633",
  //     price: 38100000,
  //   },
  //   {
  //     id: 6,
  //     name: "Chuôi Predator Throne3 2 Pool Cue",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/55.jpg?v=1727340884660",
  //     price: 40500000,
  //   },
  //   {
  //     id: 7,
  //     name: "Chuôi Predator Throne3 1 Pool Cue",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/49.jpg?v=1727340901280",
  //     price: 48500000,
  //   },
  //   {
  //     id: 8,
  //     name: "Chuôi Predator Sport II AMP Wrap",
  //     url: "https://bizweb.dktcdn.net/thumb/large/100/357/267/products/chuoi-predator-sport-ii-amp-wrap-den-full.jpg?v=1725961138910",
  //     price: 9000000,
  //   }
  // ]
  products: any[] = [];
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productService.getNewArrivals().subscribe((data) => {
      this.products = data;
    });
  }
}
