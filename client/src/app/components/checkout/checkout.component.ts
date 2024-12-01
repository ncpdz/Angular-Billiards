import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../../service/orders.service';
import { CartService } from '../../service/carts.service';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  cartItems: any[] = [];
  totalAmount: number = 0;
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.cartService.getCart(token).subscribe(
      (data) => {
        this.cartItems = data;
        this.totalAmount = this.cartItems.reduce(
          (acc, item) => acc + item.Product.price * item.quantity,
          0
        );
      },
      (error) => {
        console.error('Error fetching cart', error);
      }
    );
  }
  submitOrder(): void {
    if (this.checkoutForm.valid) {
      const customerInfo = this.checkoutForm.value;
      const order = {
        items: this.cartItems,
        totalAmount: this.totalAmount,
        customerInfo,
      };
      const token = this.authService.getToken();
      if (!token) {
        this.router.navigate(['/login']);
        return;
      }
      console.log('Order payload:', order);
      this.orderService.createOrder(order, token).subscribe(
        (response) => {
          console.log('Order created', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error creating order', error);
        }
      );
    }
  }
}
