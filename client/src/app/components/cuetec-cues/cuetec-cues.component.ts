import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemNewCuesComponent } from '../item-new-cues/item-new-cues.component';

@Component({
  selector: 'app-cuetec-cues',
  standalone: true,
  imports: [FormsModule, CommonModule, ItemNewCuesComponent],
  templateUrl: './cuetec-cues.component.html',
  styleUrl: './cuetec-cues.component.css',
})
export class CuetecCuesComponent implements OnInit {
  products: any[] = [];
  defaultTransform: any;
  slider: any;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.slider = this.el.nativeElement.querySelector('#slider');
    this.defaultTransform = 0;
    this.productService.getProductsByCategory(1).subscribe((data) => {
      // console.log('Fetched products:', data);
      this.products = data;
    });
    
  }

  goNext() {
    this.defaultTransform = this.defaultTransform - 200;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) {
      this.defaultTransform = 0;
    }
    this.renderer.setStyle(
      this.slider,
      'transform',
      `translateX(${this.defaultTransform}px)`
    );
  }

  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) {
      this.defaultTransform = 0;
    } else {
      this.defaultTransform = this.defaultTransform + 200;
    }
    this.renderer.setStyle(
      this.slider,
      'transform',
      `translateX(${this.defaultTransform}px)`
    );
  }
}
