import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showNotificationBar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  toogleMenu(menu)
    
    // Simuler l'état connecté d'un vrai utilisateur
    this.initializeUserState();
  {
    menu.classList.toggle("collapse")
  }

  hideNotificationBar(): void {
    this.showNotificationBar = false;
  }

  private initializeUserState(): void {
    // Simulation d'un état utilisateur réaliste
    setTimeout(() => {
      this.updateCartCount();
      this.updateWishlistCount();
    }, 1000);
  }

  private updateCartCount(): void {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
      // Simulation d'articles dans le panier
      const randomCount = Math.floor(Math.random() * 5) + 1;
      cartBadge.textContent = randomCount.toString();
    }
  }

  private updateWishlistCount(): void {
    const wishlistBadge = document.querySelector('.wishlist-count');
    if (wishlistBadge) {
      // Simulation d'articles en favoris
      const randomCount = Math.floor(Math.random() * 10) + 3;
      wishlistBadge.textContent = randomCount.toString();
    }
  }
}
