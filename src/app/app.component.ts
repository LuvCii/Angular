import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  teachers = [{
    id: 1,
    name: "Nguyen",
    age: 21,
    gender: 1,
    avatar: 'https://picsum.photos/200/300',
    status: 1
  },
  {
    id: 2,
    name: "Tran",
    age: 31,
    gender: 0,
    avatar: 'https://picsum.photos/200/300',
    status: 0
  }
  ]


  //? click vào thẻ h1
  name = '';
  clickH1() {
    console.log("Da click vao h1");
    this.name = 'Poly'

  }

  //? Hidden table
  showStatus = true;
  changeList() {
    this.showStatus = !this.showStatus;
  }

  //? Định nghĩa hàm khi thay đổi nội dung input
  inputValue = '';
  changeInput(e: any) {
    this.inputValue = e.target.value;
  }



  //?
  inputValues = {
    // id: "",
    name: '',
    age: '',
    gender: '0',
    avatar: '',
    status: '0'
  };

  //? form đăng kí lấy giá trị từ input
  // onInputName(event: any, info: string) {
  //   console.log(event.target.value, info);
  // }
  // onInputAge(event: any, info: string) {
  //   console.log(event.target.value, info);
  // }
  onInput(event: any, key: 'name' | 'age' | 'avatar' | 'gender' | 'status') {
    //! key: 'name' | 'age' chỉ được nhận giá trị của inputValues có sẵn khi định nghĩa
    this.inputValues[key] = event.target.value;
  }

  //? Event submit form
  onSubmit() {
    //? Thêm data vào form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age,  //? "+"" đưa age từ chuỗi về số
      gender: +this.inputValues.gender,
      status: +this.inputValues.status,
      id: this.teachers.length + 1
    });
    //? Cập nhật lại giá trị cho thẻ input trong form
    this.inputValues = {
      name: '',
      age: '',
      avatar: '',
      gender: '0',
      status: '0'
    }

  }
}

