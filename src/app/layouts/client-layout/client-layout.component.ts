import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService,) {
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
}
