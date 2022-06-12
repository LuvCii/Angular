import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: User[]

  constructor(
    private userService: UserService,
    private toast: NgToastService
  ) {
    this.users = []
  }

  ngOnInit(): void {
    this.onGetList();
  }

  //? Lấy danh sách sẽ được gọi khi lần đầu render và khi xóa mỗi phần tử
  onGetList() {
    //? Lắng nghe API trả về kết quả, bao giờ trả về xong thì data sẽ có dữ liệu
    this.userService.getUsers().subscribe((data) => {
      //? Khi có dữ liệu sẽ gán về danh sách
      this.users = data;
      console.log(data);

    })
  }

  onUpdateStatus(productId: string, newStatus: number) {
    this.userService.updateUser(productId, {
      role: newStatus,
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
      this.userService.deleteUser(id).subscribe((data) => {
        this.toast.success({ detail: 'Message', summary: 'Delete Success', duration: 3000 });
        //? Cập nhật lại danh sách
        this.onGetList()
      })

    }
  }

}
