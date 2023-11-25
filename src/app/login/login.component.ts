import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from '../services/User/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   loginform!: FormGroup;
submitted =false
  constructor(private formBuilder: FormBuilder , private userService: UserService,private router: Router, private route: ActivatedRoute)  {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.router.events.subscribe((event) => {
      console.log('Router Event:', event);
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
          if (response.data) {
            localStorage.setItem('token', response.data);
          this.router.navigate(['dashboard']);
          }
        });
    }
  }
}

