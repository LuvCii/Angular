import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: NgToastService
  ) {
    this.signInForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        // Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        // Validators.maxLength(50),
      ]),
    })
  }

  ngOnInit(): void {
  }
  redirectToList() {
    this.router.navigateByUrl('/auth/signin');
  }
  onSubmit() {
    const data = this.signInForm.value;
    return this.authService.signup(data).subscribe(data => {
      this.toast.success({ detail: 'Message', summary: 'Register Success', duration: 3000 });
      //? 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
    })
  }

}
