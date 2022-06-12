import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {

  productId: string;
  productForm: FormGroup;
  constructor(
    private productService: ProductService,  //? các phương thức call API
    private router: Router, //? Điều hướng
    private activatedRoute: ActivatedRoute,//? lấy các tham số trên url
    private toast: NgToastService
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required),   //? formControl(Giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),

      ]), // FormControl(giá trị mặc định)
      price: new FormControl('', [
        Validators.required
      ]),
      sale_price: new FormControl('', [
        Validators.required
      ]),
      quantity: new FormControl('', [
        Validators.required
      ]),
      img: new FormControl('', [
        Validators.required,
        this.onValidateNameHasProduct //? chỉ gọi lại tên của hàm validate
      ]),
      status: new FormControl('', [
        Validators.required
      ]),
      desc: new FormControl('', [
        Validators.required
      ]),
    });
    this.productId = '';
  }



  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        //? Cập nhật data cho form (data: {id: 5, name: '...'})
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          sale_price: data.sale_price,
          quantity: data.quantity,
          img: data.img,
          status: data.status,
          desc: data.desc
        })
      })
    }
  }

  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if (!inputValue.includes('http')) {
      return { hasProductError: true };
    }
    return null;
  }

  redirectToList() {
    this.router.navigateByUrl('/admin/products');
  }

  onSubmit() {
    // console.log(this.productForm.value);
    //? 1. Nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;

    if (this.productId != '' && this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.toast.success({ detail: 'Message', summary: 'Edit Product Success', duration: 3000 });
        this.redirectToList();
      })
    }

    //? 2. Call api tạo giá trị mới
    return this.productService.createProduct(data).subscribe(data => {
      this.toast.success({ detail: 'Message', summary: 'Create Product Success', duration: 3000 });
      //? 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
      //? 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API

      //? Lấy danh sách mới
    })
  }

}
