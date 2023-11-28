
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Component } from'@angular/core';
  import { Router } from '@angular/router';
  import { UserService } from 'src/app/services/notes/user.service';
@Component({
  selector: 'app-resistration',
  templateUrl: './resistration.component.html',
  styleUrls: ['./resistration.component.scss']
})

export class ResistrationComponent {
  registerForm: FormGroup;
  showPassword = false;
  submitted = false;
  router: any;

  constructor(private formBuilder: FormBuilder ,private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],

      
lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmpassword: ['', Validators.required],
     password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
      ]],
});
    
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  register()
  {
    this.submitted =true;
    const{firstname,lastname,email,password} = this.registerForm.value;
    if (this.registerForm.valid) {
      // Log the user input to the console
      console.log('User Input:', {
        firstname,
        lastname,
        email,
        password,
      });
    if (this.registerForm.valid) {
      this.userService
        .signup({
          firstName: firstname,
          lastname: lastname,
          EmailId: email,
          password: password,
          service: 'advance',
        })
        .subscribe((response: any) => {
          console.log('data', response);
          localStorage.setItem('token', response.data);
          this.router.navigate(['']);
        
        });
    }
    

  }
} 
}
