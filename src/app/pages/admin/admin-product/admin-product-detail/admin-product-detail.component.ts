import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private activeProductRoute: ActivatedRoute) {
    this.product = {
      id: 0,
      name: ''
    }
  }

  ngOnInit(): void {
    //? ActivateRoute sẽ có thể đọc biến được truyền vào từ url
    //? tên id được định nghĩa ở app-routing :id
    const idFromUrl = this.activeProductRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
    })
  }


}
