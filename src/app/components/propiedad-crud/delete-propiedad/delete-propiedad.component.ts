import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropiedadService } from '../../../services/propiedad.service';

@Component({
  selector: 'app-delete-propiedad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-propiedad.component.html',
  styleUrls: ['./delete-propiedad.component.css']
})
export class DeletePropiedadComponent {
  searchId: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private propiedadService: PropiedadService) {}

  deletePropiedad() {
    const id = Number(this.searchId);
    if (id) {
      this.propiedadService.deletePropiedad(id).then(() => {
        this.successMessage = `Propiedad con ID ${id} eliminada exitosamente.`;
        this.errorMessage = '';
      }).catch((error) => {
        console.error(error);
        this.errorMessage = `Error al eliminar la propiedad: ${error.message}`;
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}
