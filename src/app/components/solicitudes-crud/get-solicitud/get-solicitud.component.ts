import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../services/solicitud.service';

@Component({
  selector: 'app-get-solicitud',
  templateUrl: './get-solicitud.component.html',
  styleUrls: ['./get-solicitud.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GetSolicitudComponent {
  solicitud: Solicitud | null = null;
  errorMessage: string = '';
  searchId: string = '';

  constructor(private solicitudService: SolicitudService) { }

  buscarSolicitud() {
    const id = Number(this.searchId);
    if (id) {
      this.solicitudService.getSolicitudById(id).then(solicitud => {
        this.solicitud = solicitud;
        this.errorMessage = '';
      }).catch(error => {
        console.error('Error al obtener la solicitud:', error);
        this.solicitud = null;
        this.errorMessage = 'Solicitud no encontrada o error en la búsqueda.';
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}
