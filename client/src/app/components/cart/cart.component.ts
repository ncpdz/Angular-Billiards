import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/carts.service';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  shippingFee: number = 40000;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.cartService.getCart(token).subscribe(
      (data) => {
        this.cartItems = data;
        this.calculateTotal();
      },
      (error) => {
        console.error('Error fetching cart', error);
      }
    );
  }

  calculateTotal(): void {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.Product.price * item.quantity, 0);
  }

  increaseQuantity(item: any): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.cartService.addToCart(item.Product.id, 1, token).subscribe(
      (response) => {
        item.quantity += 1;
        this.calculateTotal();
        console.log('Item quantity increased', response);
      },
      (error) => {
        console.error('Error increasing item quantity', error);
      }
    );
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      const token = this.authService.getToken();
      if (!token) {
        this.router.navigate(['/login']);
        return;
      }
      this.cartService.addToCart(item.Product.id, -1, token).subscribe(
        (response) => {
          item.quantity -= 1;
          this.calculateTotal();
          console.log('Item quantity decreased', response);
        },
        (error) => {
          console.error('Error decreasing item quantity', error);
        }
      );
    }
  }

  removeFromCart(productId: number): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.cartService.removeFromCart(productId, token).subscribe(
      (response) => {
        this.cartItems = this.cartItems.filter(item => item.productId !== productId);
        this.calculateTotal();
        console.log('Item removed from cart', response);
      },
      (error) => {
        console.error('Error removing item from cart', error);
      }
    );
  }
}
