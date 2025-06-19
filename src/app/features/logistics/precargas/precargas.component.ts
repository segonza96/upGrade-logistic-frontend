import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-precargas',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './precargas.component.html',
  styleUrl: './precargas.component.scss'
})
export class PrecargasComponent {
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      console.log('Archivo seleccionado:', file.name);
      
    }
  }
}
