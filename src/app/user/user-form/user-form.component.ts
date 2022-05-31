import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // @Input() inputValues: any;
  @Input() inputValues: {
    id: number,
    name: string,
    age: number,
    email: string
  };
  //? 1. Định nghĩa sự kiện để bắn dữ liệu ngược lại
  @Output() handleSubmit: EventEmitter<any>;

  constructor() {
    this.handleSubmit = new EventEmitter();
    this.inputValues = {
      id: 0,
      name: '',
      age: 0,
      email: ''
    };
  }

  ngOnInit(): void {

  }

  onSubmit(userForm: NgForm) {   //? Nhận toàn bộ giá trị của form
    console.log(userForm);

    //? 3. Gửi dữ liệu đi
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    })
  }

}
