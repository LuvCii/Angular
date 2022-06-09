import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

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

  ngOnInit(): void {
    this.onGetList();
  }



  //? Lấy danh sách sẽ được gọi khi lần đầu render và khi xóa mỗi phần tử
  onGetList() {
    //? Lắng nghe API trả về kết quả, bao giờ trả về xong thì data sẽ có dữ liệu
    this.productService.getProducts().subscribe((data) => {
      //? Khi có dữ liệu sẽ gán về danh sách
      this.products = data;
      console.log(data);

    })
  }

  // onUpdateStatus(productId: number, newStatus: number) {
  //   this.productService.updateProduct(`${productId}`, {
  //     status: newStatus,
  //     price: 0,
  //     desc: ''
  //   }).subscribe(data => {
  //     this.onGetList();
  //   });
  // }

  onDelete(id: string | number) {
    //? confirm
    const confirmDelete = confirm("Are you sure you want to delete");
    //? Kiểm tra dữ liệu => xóa
    if (confirmDelete && id) {
      // console.log(id);
      this.productService.deleteProduct(id).subscribe((data) => {
        //? Cập nhật lại danh sách
        this.onGetList()
      })

    }
  }
}
