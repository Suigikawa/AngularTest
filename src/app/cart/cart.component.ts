import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
  options: FormGroup;
  hideRequiredControl = new FormControl(false);

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    fb: FormBuilder
  ) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
    });
  }

  onSubmit() {
    this.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
  }
}
