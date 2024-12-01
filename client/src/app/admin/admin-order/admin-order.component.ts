import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/orders.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-order.component.html',
  styleUrl: './admin-order.component.css',
})
export class AdminOrderComponent {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
  orders: any[] = [];
  statuses = [
    { value: 1, label: 'Đang xử lý' },
    { value: 2, label: 'Đã hủy' },
    { value: 3, label: 'Đang giao hàng' },
    { value: 4, label: 'Đã nhận hàng' },
  ];
  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.orderService.getAllOrders(token).subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }
  updateStatus(orderId: number, status: number): void {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    this.orderService.updateOrderStatus(orderId, status, token).subscribe(
      (response) => {
        console.log('Order status updated', response);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error updating order status', error);
      }
    );
  }
  getStatusOptions(currentStatus: number) {
    return this.statuses.filter((status) => {
      if (currentStatus === 2) {
        return status.value === currentStatus;
      }
      return status.value >= currentStatus;
    });
  }
}
