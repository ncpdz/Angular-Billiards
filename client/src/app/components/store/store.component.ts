import { Component, OnInit } from '@angular/core';
import { ItemNewCuesComponent } from '../item-new-cues/item-new-cues.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../service/products.service';
import { CategoriesService } from '../../service/categories.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ItemNewCuesComponent, CommonModule, FormsModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  products: any = [];
  categories: any = [];
  filteredProducts: any = [];
  searchQuery: string = '';
  selectedCategory: number | null = null;
  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }
  loadProducts(): void {
    this.productService.getAllData().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }
  loadCategories(): void {
    this.categoriesService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  searchProducts(): void {
    this.applyFilters();
  }
  filterByCategory(): void {
    this.applyFilters();
  }
  applyFilters(): void {
    this.filteredProducts = this.products;
    if (this.selectedCategory !== null) {
      this.filteredProducts = this.filteredProducts.filter(
        (product: any) => product.CategoryId === this.selectedCategory
      );
    }
    if (this.searchQuery) {
      this.filteredProducts = this.filteredProducts.filter((product: any) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
