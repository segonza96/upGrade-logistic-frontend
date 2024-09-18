import { Component } from '@angular/core';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatNavList,      // Importa MatNavList
    MatListItem,     // Importa MatListItem
    MatIconModule    // Importa MatIconModule para los íconos
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
