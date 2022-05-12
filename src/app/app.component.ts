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
    age: 21,
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
    age: 28,
    gender: 0,
    avatar: 'https://picsum.photos/200/300',
    status: 0
  }
  ]
}
