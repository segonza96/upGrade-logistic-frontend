import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatNavList,      // Importa MatNavList
    MatListItem,     // Importa MatListItem
    MatIconModule    // Importa MatIconModule para los íconos
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  ordersMenuOpen = false;

  constructor(private router: Router) {}

  toggleOrdersMenu() {
    this.ordersMenuOpen = !this.ordersMenuOpen;
    if (this.ordersMenuOpen) {
      // Navegar por defecto a Ver órdenes
      this.router.navigate(['/logistics/orders/list']);
    }
  }

  closeOrdersMenu() {
    this.ordersMenuOpen = false;
  }

  goToCreateOrder() {
    this.router.navigate(['/logistics/orders/create']);
    this.ordersMenuOpen = false;
  }
}
