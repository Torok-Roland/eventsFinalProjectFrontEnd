import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.css']
})
export class LoginFormPageComponent {
  passwordVisible = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
  }

  userForm: FormGroup = new FormGroup({
    userNameInputFormControl: new FormControl(),
    passwordInputFormControl: new FormControl()
  });

  togglePasswordVisibility(passwordInput: HTMLInputElement): void {
    this.passwordVisible = !this.passwordVisible;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userNameInputFormControl: [''],
      passwordInputFormControl: ['', Validators.required]
    });
  }

  login() {
    const userName = this.userForm.value.userNameInputFormControl;
    const password = this.userForm.value.passwordInputFormControl;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      userName: userName,
      password: password
    };
    alert('Something went wrong BEFORE');

    this.http.get<any>('/api/login', { params: body, headers: headers }).subscribe(
      (response: any) => {
        if (response === 'Login successful') {
          alert('Login Successful');
          this.userForm.reset();
          this.router.navigate(['/events']);
        } else {
          alert('Invalid credentials');
        }
      },
      (error) => {
        console.error('Error occurred:', error);
        alert('Something went wrong AFTER');
      }
    );
  }
  navigateToRegister(){
    this.router.navigate(['/register']); // Navigate to the register page

  }

}
