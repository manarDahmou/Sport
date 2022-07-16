import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: any = {};
  msgError: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }
  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
        if (data.message != '2') {
          this.msgError = 'Please Check email/pwd';
        } else {
          this.router.navigate([`profile/${data.userToSend.id}`]);
        }
      }
    )
  }

}
