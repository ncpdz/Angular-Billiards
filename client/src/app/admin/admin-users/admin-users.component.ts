import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import { NgModel, NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.css',
})
export class AdminUsersComponent implements OnInit {
  isDivVisible = false;
  toggleDiv() {
    this.isDivVisible = !this.isDivVisible;
  }
  users: any[] = [];
  selectedUser: any;
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
  editUser(user: any): void {
    this.selectedUser = { ...user };
  }
  updateUser(): void {
    this.usersService
      .updateUser(this.selectedUser.id, this.selectedUser)
      .subscribe(() => {
        this.loadUsers();
        this.selectedUser = null;
      });
  }
  toggleActiveStatus(user: any): void {
    user.isActive = !user.isActive;
    this.usersService.updateUser(user.id, user).subscribe(() => {
      this.loadUsers();
    });
  }
}
