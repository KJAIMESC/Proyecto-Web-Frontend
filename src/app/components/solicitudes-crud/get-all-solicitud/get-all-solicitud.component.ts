import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../services/solicitud.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-get-all-solicitudes',
  templateUrl: './get-all-solicitud.component.html',
  styleUrls: ['./get-all-solicitud.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GetAllSolicitudComponent implements OnInit {
  solicitudes: Solicitud[] = [];
  message: string = '';

  constructor(private solicitudService: SolicitudService, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');

    if(token && tokenType) {
      this.solicitudService.getAllSolicitudes(token, tokenType).then(data => {
        this.solicitudes = data;
      }).catch(error => {
        console.error('Error al cargar las solicitudes:', error);
        this.message = 'Error al cargar solicitudes';
      });
    } else {
      this.message = 'No se encontraron las cookies de autenticación.';
    }
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
}

