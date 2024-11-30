import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '../../service/categories.service';
@Component({
  selector: 'app-admin-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './admin-category.component.html',
  styleUrl: './admin-category.component.css',
})
export class AdminCategoryComponent implements OnInit {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
  isDivVisibleUpdate = false;
  toggleDivUpdate() {
    this.isDivVisibleUpdate = !this.isDivVisibleUpdate;
  }
  categories: any[] = [];
  categoryForm: FormGroup;
  editingCategory: any = null;
  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({ name: [''], description: [''] });
  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }
  addCategory() {
    this.categoriesService
      .createCategory(this.categoryForm.value)
      .subscribe(() => {
        this.getAllCategories();
        this.categoryForm.reset();
      });
  }
  editCategory(category: any) {
    this.editingCategory = category;
    this.categoryForm.patchValue(category);
  }
  updateCategory() {
    this.categoriesService
      .updateCategory(this.editingCategory.id, this.categoryForm.value)
      .subscribe(() => {
        this.getAllCategories();
        this.editingCategory = null;
        this.categoryForm.reset();
      });
  }
  deleteCategory(id: number) {
    this.categoriesService.deleteCategory(id).subscribe(() => {
      this.getAllCategories();
    });
  }
}
