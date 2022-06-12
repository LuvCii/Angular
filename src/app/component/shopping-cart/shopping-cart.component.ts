import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductCart, Product } from 'src/app/types/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product: ProductCart[];

  constructor(
    private toast: NgToastService
  ) {
    this.product = []
  }

  ngOnInit(): void {
    this.onGetCart();
  }
  onGetCart(): void {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.product = cart;
  }
  onDelete(_id: string): void {
    const confirmDelete = confirm('Bạn có chắc chắn xoá không?');
    if (confirmDelete && _id) {
      const result = JSON.parse(localStorage.getItem('cart') || '[]');
      const newData = result.filter((x: any) => x._id !== _id);
      localStorage.setItem('cart', JSON.stringify(newData));
      this.toast.success({ detail: 'Message', summary: 'Delete item Success', duration: 2000 });
    }
    this.onGetCart()
  }

}
