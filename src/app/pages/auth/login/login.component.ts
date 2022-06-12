import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const submitData = this.loginForm.value;

    this.authService.login(submitData).subscribe(data => {
      // console.log(data.user.role);
      //? 1. Nếu login thành công -> lưu dữ liệu user vào localStorage
      //? setItem (key lưu trong localStorage, chuỗi giá trị)
      localStorage.setItem('loggedInUser', JSON.stringify(data))
      //? 2. Điều hướng quay về admin
      if (data.user.role == 1) {
        this.toast.success({ detail: ' Message', summary: 'Đăng nhập thành công', duration: 3000 });
        this.router.navigateByUrl('/admin');
      } else if (data.user.role == 0) {
        this.toast.success({ detail: 'Message', summary: 'Đăng nhập thành công', duration: 3000 });
        this.router.navigateByUrl('/');
      } else {
        this.toast.error({ detail: 'Error Message', summary: 'Đăng nhập thất bại', duration: 3000 });
      }
    });
  }
}
