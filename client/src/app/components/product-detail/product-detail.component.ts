import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/carts.service';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(productId)) {
      this.productService.getProductById(productId).subscribe((data) => {
        this.product = data;
      });
    } else {
      console.error('Invalid Product ID');
    }
  }

  addToCart(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    console.log('Adding to cart:', { productId: this.product.id, quantity: this.quantity, token });
    this.cartService.addToCart(this.product.id, this.quantity, token).subscribe(
      (response) => {
        console.log('Item added to cart', response);
        alert("Đã thêm sản phẩm vào giỏ hàng!")
      },
      (error) => {
        console.error('Error adding item to cart', error.message);
      }
    );
  }

  increaseQuantity(): void {
    this.quantity += 1;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }
}
