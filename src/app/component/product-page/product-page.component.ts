import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
// import { Category } from 'src/app/types/Category';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product[];
  // category: Category[];

  constructor(
    private productService: ProductService,
    // private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = [];
  }

  ngOnInit(): void {
    this.onGetList();
  }
  //? Lấy danh sách sẽ được gọi khi lần đầu render và khi xóa mỗi phần tử
  onGetList() {
    const idFromUrl = this.activatedRoute.snapshot.params['id'];
    //? Lắng nghe API trả về kết quả, bao giờ trả về xong thì data sẽ có dữ liệu
    this.productService.getCategory(idFromUrl).subscribe((data) => {
      //? Khi có dữ liệu sẽ gán về danh sách
      this.product = data;
      console.log(data);

    })
  }
}
