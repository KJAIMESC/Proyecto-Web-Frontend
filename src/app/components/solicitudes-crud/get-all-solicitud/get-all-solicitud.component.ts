import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../services/solicitud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-solicitudes',
  templateUrl: './get-all-solicitud.component.html',
  styleUrls: ['./get-all-solicitud.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GetAllSolicitudComponent implements OnInit {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes() {
    this.solicitudService.getAllSolicitudes()
      .then(solicitud => {
        this.solicitudes = solicitud;
      })
      .catch(error => {
        console.error('Error al cargar las solicitudes:', error);
      });
  }
}
