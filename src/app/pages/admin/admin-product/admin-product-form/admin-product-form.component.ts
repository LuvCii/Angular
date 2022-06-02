import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  [x: string]: any;

  productForm: FormGroup;
  constructor(private productService: ProductService,  //? các phương thức call API
    private router: Router //? Điều hướng
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required),   //? formControl(Giá trị mặc định)
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]), // FormControl(giá trị mặc định)
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.productForm.value);
    //? 1. Nhận dữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    //? 2. Call api tạo giá trị mới
    this.productService.createProduct(data).subscribe(data => {
      //? 3. Quay lại danh sách product
      this.router.navigate(['/admin', 'products']);
      //? 3.1 Khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call API
      //? Lấy danh sách mới
    })
  }

}
