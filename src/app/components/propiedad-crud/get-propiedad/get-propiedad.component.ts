import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../models/propiedad';

@Component({
  selector: 'app-get-propiedad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-propiedad.component.html',
  styleUrls: ['./get-propiedad.component.css']
})
export class GetPropiedadComponent {
  propiedad: Propiedad | null = null;
  errorMessage: string = '';
  searchId: string = '';

  constructor(private propiedadService: PropiedadService) {}

  buscarPropiedad() {
    const id = Number(this.searchId);
    if (id) {
      this.propiedadService.getPropiedadById(id).then((data) => {
        this.propiedad = data;
        this.errorMessage = '';
      }).catch((error) => {
        console.error(error);
        this.propiedad = null;
        this.errorMessage = 'Propiedad no encontrada o error en la búsqueda.';
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}
