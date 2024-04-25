import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrendatarioService } from '../../../services/arrendatario.service';

@Component({
  selector: 'app-delete-arrendatario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-arrendatario.component.html',
  styleUrls: ['./delete-arrendatario.component.css']
})
export class DeleteArrendatarioComponent {
  searchId: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private arrendatarioService: ArrendatarioService) {}

  deleteArrendatario() {
    const id = Number(this.searchId);
    if (id) {
      this.arrendatarioService.deleteArrendatario(id).then(() => {
        this.successMessage = `Arrendatario con ID ${id} eliminado exitosamente.`;
        this.errorMessage = '';
      }).catch((error) => {
        console.error(error);
        this.errorMessage = `Error al eliminar el arrendatario: ${error.message}`;
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}