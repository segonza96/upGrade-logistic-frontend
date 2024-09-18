import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HeaderComponent } from './header/header.component';
import {SidebarComponent } from './sidebar/sidebar.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    RouterModule // También es posible que debas importar las rutas aquí si este es el componente raíz
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homeD';
  expandedMenu: string = '';
  
  toggleSubMenu(menu: string) {
    this.expandedMenu = this.expandedMenu === menu ? '' : menu;
  }

  isExpanded(menu: string) {
    return this.expandedMenu === menu;
  }
}
