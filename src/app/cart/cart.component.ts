import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();
  clearCart() {
    this.items = this.cartService.clearCart();
  }

  checkoutForm = this.formBuilder.group({ name: '', address: '' });
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    this.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
  }
}
