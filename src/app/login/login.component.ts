import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/User/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   loginform!: FormGroup;
submitted =false
  constructor(private formBuilder: FormBuilder , private userService: UserService)  {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
  }
  public showPassword = false;
  public showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  handleLogin() {
    this.submitted = true;
    console.log('handle', this.loginform);

    const { email, password } = this.loginform.value;
    if (this.loginform.valid) {
      this.userService
        .login({
          EmailId: email,
          Password: password,
        })
        .subscribe((response: any) => {
          console.log('id', response);
          if (response.id) {
            localStorage.setItem('token', response.id);
            //this.router.navigate(['dashboard']);
          }
        });
    }
  }
}

