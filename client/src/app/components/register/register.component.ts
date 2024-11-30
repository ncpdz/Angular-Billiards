import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formRegisterGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.formRegisterGroup = new FormGroup({
      usernameControl: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      emailControl: new FormControl(null, [Validators.required, Validators.email]),
      passwordControl: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  get registerFormControl() {
    return this.formRegisterGroup.controls;
  }

  register(): void {
    if (this.formRegisterGroup.valid) {
      const { usernameControl: username, emailControl: email, passwordControl: password } = this.formRegisterGroup.value;
      this.authService.register(username, email, password).subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.router.navigateByUrl('/login'); 
        },
        (error) => {
          console.error('Registration failed', error);
          alert('Registration failed: ' + error.message);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
