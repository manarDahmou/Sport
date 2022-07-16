import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  imagePreview: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      pwd: [''],
      confirmPwd: [''],
      img:['']
    },
      {
        validator: MustMatch('pwd', 'confirmPwd')
      })
  }
  signup() {
    console.log('Here user', this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (data) => {
        console.log('Message from BE', data.message);
        this.router.navigate(['']);
      }
    )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];   
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; reader.readAsDataURL(file);
  }
}
