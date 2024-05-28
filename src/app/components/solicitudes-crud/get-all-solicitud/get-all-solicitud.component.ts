import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../services/solicitud.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-all-solicitudes',
  templateUrl: './get-all-solicitud.component.html',
  styleUrls: ['./get-all-solicitud.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class GetAllSolicitudComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  message: string = '';
  calificacion: number = 1; // Valor por defecto para la calificación
  showCalificar: {[key: number]: boolean} = {};

  constructor(private solicitudService: SolicitudService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.loadSolicitudes();
  }
  
  onCalificacionChange(event: any) {
    this.calificacion = Number(event.target.value);
  }

  loadSolicitudes() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');

    if (token && tokenType) {
      this.solicitudService.getAllSolicitudes(token, tokenType).then(data => {
        this.solicitudes = data;
        // Inicializa showCalificar para todas las solicitudes como false
        this.solicitudes.forEach(solicitud => {
          this.showCalificar[solicitud.id_solicitud || 0] = false;
        });
      }).catch(error => {
        console.error('Error al cargar las solicitudes:', error);
        this.message = 'Error al cargar solicitudes';
      });
    } else {
      this.message = 'No se encontraron las cookies de autenticación.';
    }
  }

  toggleCalificar(id: number) {
    this.showCalificar[id] = !this.showCalificar[id];
  }

  deleteSolicitud(id: number) {
    this.solicitudService.deleteSolicitud(id)
      .then(() => {
        console.log("Solicitud eliminada con éxito");
        this.message = "Solicitud eliminada con éxito";
        this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id_solicitud !== id);
      })
      .catch(error => {
        console.error("Error al eliminar la solicitud", error);
        this.message = error.response.data.message;
      });
  }

  calificarSolicitud(id: number, calificacion: number | null | undefined) {
    if (calificacion == null) {  
      console.error("Calificación no puede ser nula");
      this.message = "Calificación no proporcionada";
      return;
    }
  
    this.solicitudService.calificarSolicitud(id, calificacion)
    .then(() => {
      this.message = `Solicitud ${id} calificada con éxito con un puntaje de ${calificacion}`;
      console.log(this.message);
      this.loadSolicitudes(); // Recargar solicitudes para actualizar la interfaz
      this.showCalificar[id] = false; // Cerrar el formulario de calificación
    })
    .catch(error => {
      console.error("Error al calificar la solicitud", error);
      this.message = "Error al calificar la solicitud!!";
    });  
  }

}
