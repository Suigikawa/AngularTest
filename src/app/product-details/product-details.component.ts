import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  produit: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.produit = product.find((produit) => produit.id === productIdFromRoute);
    for (let prod of product) {
      console.log(prod.id);
      console.log(this.produit?.name);
    }
  }
}
