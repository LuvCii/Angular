import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  @Input() age: number;

  constructor() {
    this.age = 0;
  }

  ngOnInit(): void {
  }

}
