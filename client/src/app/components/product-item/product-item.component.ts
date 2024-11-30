import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  // url: string = "https://pagedone.io/asset/uploads/1700731972.png";
  @Input() name = "";
  @Input() price = 0;
  @Input() url = "";
  @Input() idProduct = 0;
  @Input() isSave = false;
  @Output() isSaveEvent = new EventEmitter<any>();

  handleClick(){
    // this.isSave = true;
    this.isSaveEvent.emit({id: this.idProduct, isSave: !this.isSave});
  }
}
