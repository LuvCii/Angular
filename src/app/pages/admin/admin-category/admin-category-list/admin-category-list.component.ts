import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/types/Category';
import { NgToastService } from 'ng-angular-popup';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories: Category[];
  constructor(
    private categoryService: CategoryService,
    private toast: NgToastService
  ) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.onGetList();
  }

  //? Lấy danh sách sẽ được gọi khi lần đầu render và khi xóa mỗi phần tử
  onGetList() {
    //? Lắng nghe API trả về kết quả, bao giờ trả về xong thì data sẽ có dữ liệu
    this.categoryService.getCategories().subscribe((data) => {
      //? Khi có dữ liệu sẽ gán về danh sách
      this.categories = data;
      // console.log(data);

    })
  }

  onUpdateStatus(cateId: string, newStatus: number) {
    this.categoryService.updateCategory(cateId, {
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
      this.categoryService.deleteCategory(id).subscribe((data) => {
        this.toast.success({ detail: 'Message', summary: 'Delete Success', duration: 3000 });
        //? Cập nhật lại danh sách
        this.onGetList()
      })

    }
  }
}
