import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrendadorService } from '../../../services/arrendador.service';

@Component({
  selector: 'app-delete-arrendador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-arrendador.component.html',
  styleUrls: ['./delete-arrendador.component.css']
})
export class DeleteArrendadorComponent {
  searchId: string = '';
  message: string = '';

  constructor(private arrendadorService: ArrendadorService) {}

  deleteArrendador() {
    const id = Number(this.searchId);
    if (id) {
      this.arrendadorService.deleteArrendador(id).then(() => {
        this.message = `Arrendador con ID ${id} eliminado exitosamente.`;
      }).catch((error) => {
        console.error(error);
        this.message = error.response.data.message;
      });
    } else {
      this.message = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}