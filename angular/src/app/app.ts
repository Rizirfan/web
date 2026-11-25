
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  currentPage = 'home';

  products = [
    {
      id: 1,
      name: 'Headphones',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'
    },
    {
      id: 3,
      name: 'Shoes',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'
    },
    {
      id: 4,
      name: 'Camera',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400'
    }
  ];

  cart: any[] = [];

  changePage(page: string) {
    this.currentPage = page;
    window.scrollTo(0, 0);
  }

  addToCart(product: any) {
    this.cart.push(product);
    window.alert(product.name + ' added to cart!');
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  get total() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  submitContact() {
    window.alert('Message sent successfully!');
  }

  placeOrder() {
    if (this.cart.length === 0) {
      window.alert('Your cart is empty!');
      return;
    }

    this.cart = [];
    window.alert('Order placed successfully!');
  }
}
