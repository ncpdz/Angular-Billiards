import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css'
})
export class ItemProductComponent {
  @Input() name = "";
  @Input() price = 0;
  @Input() url = "";
  @Input() idProduct = 0;
  @Input() category = "";
}
