import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NewArrivalsComponent } from '../new-arrivals/new-arrivals.component';
import { SliderComponent } from "../slider/slider.component";
import { SlideProductComponent } from "../slide-product/slide-product.component";
import { ProductsHotComponent } from "../products-hot/products-hot.component";
import { CuetecCuesComponent } from "../cuetec-cues/cuetec-cues.component";
import { MitCuesComponent } from "../mit-cues/mit-cues.component";
import { NewCuesComponent } from "../new-cues/new-cues.component";
import { TopSearchComponent } from "../top-search/top-search.component";
import { NewsletterComponent } from "../newsletter/newsletter.component";
// declare function userjs():void;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProductItemComponent, NewArrivalsComponent, SliderComponent, SlideProductComponent, ProductsHotComponent, CuetecCuesComponent, MitCuesComponent, NewCuesComponent, TopSearchComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = "Phi";
  // handleClick(){
  //   this.name = "abc"
  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("ngOnChanges");
  // }
  // ngDoCheck(): void {
  //   console.log("ngDoCheck");
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
    
  // }
}
