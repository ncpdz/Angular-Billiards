import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit {
  currentTransform: number = 0;
  carousel:any = HTMLElement;
  itemsCount: number = 0;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit(): void {
    this.carousel = this.el.nativeElement.querySelector('#carousel');
    this.itemsCount = this.carousel.children.length;
  }
  goNext() {
    const itemWidth = this.carousel.offsetWidth;
    if (Math.abs(this.currentTransform) >= (this.itemsCount - 1) * itemWidth) {
      this.currentTransform = 0;
    } else {
      this.currentTransform -= itemWidth;
    }
    this.renderer.setStyle(
      this.carousel,
      'transform',
      `translateX(${this.currentTransform}px)`
    );
  }
  goPrev() {
    const itemWidth = this.carousel.offsetWidth;
    if (this.currentTransform === 0) {
      this.currentTransform = -((this.itemsCount - 1) * itemWidth);
    } else {
      this.currentTransform += itemWidth;
    }
    this.renderer.setStyle(
      this.carousel,
      'transform',
      `translateX(${this.currentTransform}px)`
    );
  }
}
