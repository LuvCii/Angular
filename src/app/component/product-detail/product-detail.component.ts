import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  cartItemValue: number = 1;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private lsService: LocalStorageService,
    private toast: NgToastService
  ) {
    this.product = {
      _id: '',
      name: '',
      img: '',
      price: 0,
      sale_price: 0,
      quantity: 0,
      category: '',
      desc: '',
      status: 0,
    }
  }

  ngOnInit(): void {
    const idFromUrl = this.activatedRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
    })
  }
  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }

  onAddToCart() {
    //? 1. Định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      sale_price: this.product.sale_price,
      desc: this.product.desc,
      img: this.product.img,
      quantity: this.product.quantity,
      category: this.product.category,
      value: +this.cartItemValue
    };
    this.lsService.setItem(addItem);
    this.toast.success({ detail: 'Message', summary: 'Add to Cart Success', duration: 2000 });
    // 5. Cập nhật lại giá trị cho ô input value
    this.cartItemValue = 1;
  }

}
