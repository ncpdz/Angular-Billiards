import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CategoriesService } from '../../service/categories.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css',
})
export class AdminProductsComponent implements OnInit {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
  isDivVisibleUpdate = false;
  toggleDivUpdate() {
    this.isDivVisibleUpdate = !this.isDivVisibleUpdate;
  }
  products: any[] = [];
  categories: any[] = [];
  productForm: FormGroup;
  editingProduct: any = null;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      CategoryId: [''],
      stock: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getCategories();
  }

  getAllProducts() {
    this.productsService.getAllData().subscribe((data: any) => {
      this.products = data;
    });
  }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  addProduct() {
    this.productsService.createProduct(this.productForm.value).subscribe(() => {
      this.getAllProducts();
      this.productForm.reset();
    });
  }

  editProduct(product: any) {
    this.editingProduct = product;
    this.productForm.patchValue(product);
  }

  updateProduct() {
    this.productsService
      .updateProduct(this.editingProduct.id, this.productForm.value)
      .subscribe(() => {
        this.getAllProducts();
        this.editingProduct = null;
        this.productForm.reset();
      });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.getAllProducts();
    });
  }
}
