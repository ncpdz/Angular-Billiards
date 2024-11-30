import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  // firstName: string = "Nguyễn Công";
  // lastName: string = "Phi";
  // isLogin = true;
  // getName() {
  //   return this.firstName + ' ' + this.lastName;
  // }

  // isSpecial = true;
  isLoggedIn: boolean = false;
  username: string | null = null;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.authService.getUsernameFromToken();
    }
  }
  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
    this.router.navigateByUrl('/login');
    this.isLoggedIn = false;
    this.username = null;
  }
}
