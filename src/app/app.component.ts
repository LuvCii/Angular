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
    status: 1
  },
  {
    id: 3,
    name: "Le",
    age: 21,
    gender: 1,
    avatar: 'https://picsum.photos/200/300',
    status: 0
  },
  {
    id: 4,
    name: "Dinh",
    age: 40,
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
}

