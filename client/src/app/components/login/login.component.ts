import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLoginGroup: FormGroup;
  constructor(private usersService: UsersService, private router: Router) {
    this.formLoginGroup = new FormGroup({
      emailControl: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      passwordControl: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  get loginFormControl() {
    return this.formLoginGroup.controls;
  }
  login() {
    const { emailControl: email, passwordControl: password } =
      this.formLoginGroup.value;

    this.usersService.login(email, password).subscribe(
      (data: any) => {
        console.log('Login Response:', data); 
        if (data.token) {
          localStorage.setItem('accessToken', data.token);
          this.router.navigateByUrl('/').then(() => {
            window.location.reload();
          });
        } else {
          console.error('Token is undefined');
          alert('Login failed: Token is undefined');
        }
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login failed: ' + error.message);
      }
    );
  }
}
