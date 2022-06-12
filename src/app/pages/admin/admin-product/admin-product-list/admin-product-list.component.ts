import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];

  //? Định nghĩa service dưới dạng 1 tên biến, đã tạo bên services
  constructor(
    private productService: ProductService,
    private toast: NgToastService
  ) {
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

  onUpdateStatus(productId: string, newStatus: number) {
    this.productService.updateProduct(productId, {
      status: newStatus,
      // img: '',
      // price: 0,
      // sale_price: 0,
      // quantity: 0,
      // desc: ''

    }).subscribe(data => {
      this.toast.success({ detail: 'Message', summary: 'Update Success', duration: 2000 });
      this.onGetList();
    });
  }

  onDelete(id: string | number) {
    //? confirm
    const confirmDelete = confirm("Are you sure you want to delete");
    //? Kiểm tra dữ liệu => xóa
    if (confirmDelete && id) {
      // console.log(id);
      this.productService.deleteProduct(id).subscribe((data) => {
        this.toast.success({ detail: 'Message', summary: 'Delete Success', duration: 3000 });
        //? Cập nhật lại danh sách
        this.onGetList()
      })

    }
  }
}
