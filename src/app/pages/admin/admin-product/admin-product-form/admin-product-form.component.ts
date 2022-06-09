import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

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
    private activatedRoute: ActivatedRoute //? lấy các tham số trên url
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required),   //? formControl(Giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        this.onValidateNameHasProduct //? chỉ gọi lại tên của hàm validate
      ]), // FormControl(giá trị mặc định)
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
        })
      })
    }
  }

  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if (!inputValue.includes('product')) {
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
        this.redirectToList();
      })
    }

    //? 2. Call api tạo giá trị mới
    return this.productService.createProduct(data).subscribe(data => {
      //? 3. Quay lại danh sách product
      // this.router.navigate(['/admin', 'products']);
      this.redirectToList();
      //? 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API

      //? Lấy danh sách mới
    })
  }

}
