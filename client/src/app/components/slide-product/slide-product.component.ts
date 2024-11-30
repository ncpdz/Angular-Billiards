import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide-product',
  standalone: true,
  imports: [],
  templateUrl: './slide-product.component.html',
  styleUrls: ['./slide-product.component.css'],
})
export class SlideProductComponent implements OnInit {
  defaultTransform: any;
  slider: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.slider = this.el.nativeElement.querySelector('#slider');
    this.defaultTransform = 0;
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
