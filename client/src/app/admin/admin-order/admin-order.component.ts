import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-order',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-order.component.html',
  styleUrl: './admin-order.component.css',
})
export class AdminOrderComponent {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
}
