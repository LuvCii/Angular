import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'Minh Dung',
      age: 20,
      email: 'Dungtmph16743@fpt.edu.vn'
    },
    {
      id: 3,
      name: 'Tran Minh Dung',
      age: 20,
      email: 'Dungtmph16743@fpt.edu.vn'
    }
  ]

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  }
  onSubmit(userForm: NgForm) {   //? Nhận toàn bộ giá trị của form
    //? 1. Tìm id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b)
    console.log(userIds);
    const newId = userIds[userIds.length - 1];

    //? 2. Nếu inputValues có id = 0 thì -> thêm mới
    //? 2.1 Nếu inputValues có id != 0 thì -> chỉnh sửa
    if (this.inputValues.id == 0) {
      //? 2. Thêm vào mảng
      this.users.push({
        ...userForm.value,  //? Lất ra objet giá trị của form
        id: newId + 1,
      })
    } else {
      //? 2.1 chỉnh Sửa
      const index = this.users.findIndex((user) => user.id === this.inputValues.id)
      // console.log(index);
      if (index > -1) {
        this.users[index] = {
          ...userForm.value,
          id: this.inputValues.id
        }
      }
    }


    //? 3 Cập nhật lại giá trị ban đầu
    //todo  userForm.resetForm  ( nếu không truyền gì thì tất cả về null)
    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: ''
    })
  }

  onRemove(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId)
    console.log(userId);
  }

  onEdit(userId: number) {
    //? 1. Tìm ra user có id là userId truyền vào
    const editUser = this.users.find((user) => user.id === userId)
    console.log(editUser);

    //? 2. Nếu tìm ra thì mới gán giá trị lên form
    if (editUser) {
      this.inputValues = { ...editUser }
    }

    // if (editUser) {
    //    this.inputValues = editUser;
    // }
  }

}
