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
  message: string = '';

  constructor(private propiedadService: PropiedadService) {}

  deletePropiedad() {
    const id = Number(this.searchId);
    if (id) {
      this.propiedadService.deletePropiedad(id).then(() => {
        this.message = `Propiedad con ID ${id} eliminada exitosamente.`;
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
