import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  cateId: string;
  cateForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: NgToastService
  ) {
    this.cateForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        // Validators.minLength(5),
        // Validators.maxLength(50),
      ]), // FormControl(giá trị mặc định)
      status: new FormControl('', [
        Validators.required
      ])
    })
    this.cateId = ''
  }

  ngOnInit(): void {
    this.cateId = this.activatedRoute.snapshot.params['id'];
    if (this.cateId) {
      this.categoryService.getCategory(this.cateId).subscribe(data => {
        this.cateForm.patchValue({
          name: data.name,
          status: data.status
        })
      })
    }
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/category');
  }
  onSubmit() {
    // console.log(this.productForm.value);
    //? 1. Nhận dữ liệu từ form => this.productForm.value
    const data = this.cateForm.value;

    if (this.cateId != '' && this.cateId !== undefined) {
      return this.categoryService.updateCategory(this.cateId, data).subscribe(data => {
        this.toast.success({ detail: 'Message', summary: 'Edit Category Success', duration: 3000 });
        this.redirectToList();
      })
    }

    //? 2. Call api tạo giá trị mới
    return this.categoryService.createCategory(data).subscribe(data => {
      this.toast.success({ detail: 'Message', summary: 'Create Category Success', duration: 3000 });
      //? 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
      //? 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API

      //? Lấy danh sách mới
    })
  }
}
