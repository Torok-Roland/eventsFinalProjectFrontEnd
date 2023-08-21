import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Register} from "../model/register";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  passwordVisible = false;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  register: Register = {
    id: null,
    userName: "",
    password: "",
  };

  userForm: FormGroup = new FormGroup({
    userNameInputFormControl: new FormControl(),
    passwordInputFormControl: new FormControl()
  });

  saveUser() {
    this.populateUserFormForm();
    this.httpClient.post("/api/register", this.register)
      .subscribe(
        (response) => {
          alert("Registration successful!");
          // Navigate to the login page only on successful registration
          this.router.navigate(['/login']);
        },
        (error) => {
          if (error.status === 400 && error.error === "Username is already taken") {
            this.userForm.get('userNameInputFormControl')?.setErrors({usernameTaken: true});
          } else {
            alert("An error occurred during registration.");
          }
        }
      );
  }

  populateUserFormForm() {
    this.register.userName = this.userForm.value.userNameInputFormControl;
    this.register.password = this.userForm.value.passwordInputFormControl;
  }

  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    this.passwordVisible = !this.passwordVisible;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }
  navigateToLogin(){
    this.router.navigate(['/login']); // Navigate to the login page

  }

}
