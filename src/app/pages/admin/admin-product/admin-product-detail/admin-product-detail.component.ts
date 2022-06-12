import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;


  constructor(private productService: ProductService, private activeProductRoute: ActivatedRoute) {
    this.product = {
      _id: '0',
      name: '',
      price: 0,
      sale_price: 0,
      img: '',
      quantity: 0,
      category: '',
      status: 0,
      desc: ''
    }
  }

  ngOnInit(): void {
    const idFromUrl = this.activeProductRoute.snapshot.params['id'];

    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data;
    })
  }

  // onInputValueChange(event: any) {
  //   this.cartItemValue = event.target.value;
  // }

}
