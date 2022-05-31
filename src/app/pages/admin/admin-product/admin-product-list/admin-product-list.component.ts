import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Products';


@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];

  //? Định nghĩa service dưới dạng 1 tên biến, đã tạo bên services
  constructor(private productService: ProductService) {
    this.products = [];
  }

  //? Khi component render xong sẽ chạy 1 lần vào ngOnInit
  ngOnInit(): void {
    //? Lắng nghe API trả về kết quả, bao giờ trả về xong thì data sẽ có dữ liệu
    this.productService.getProducts().subscribe((data) => {
      //? Khi có dữ liệu sẽ gán về danh sách
      this.products = data
    })
  }

}
