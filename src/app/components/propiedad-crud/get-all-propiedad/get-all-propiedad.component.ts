import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../../../models/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Solicitud } from '../../../models/solicitud';
import { SolicitudService } from '../../../services/solicitud.service'; 

@Component({
  selector: 'app-get-all-propiedad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-propiedad.component.html',
  styleUrls: ['./get-all-propiedad.component.css']
})
export class GetAllPropiedadComponent implements OnInit {
  propiedades: Propiedad[] = [];
  solicitudes: Solicitud[] = [];
  errorMessage: string = '';

  constructor(
    private propiedadService: PropiedadService,
    private router: Router,
    private cookieService: CookieService,
    private solicitudService: SolicitudService 
  ) {}

  ngOnInit(): void {
    this.loadAllPropiedades();
  }

  loadAllPropiedades() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');

    if (token && tokenType) {
      this.propiedadService.getAllPropiedades(token, tokenType).then(data => {
        this.propiedades = data;
      }).catch(error => {
        console.error('Error al cargar todas las propiedades:', error);
        this.errorMessage = 'Error al cargar propiedades';
      });
    } else {
      this.errorMessage = 'No se encontraron las cookies de autenticación';
    }
  }

  getAllSolicitudes(id: number) {
    this.solicitudService.getSolicitudesByPropiedadId(id)
      .then(data => {
        this.solicitudes = data;
      })
      .catch(error => {
        console.error('Error al cargar las solicitudes:', error);
        this.errorMessage = 'Error al cargar solicitudes';
      });
  }

  updatePropiedad(id: number) {
    this.router.navigate(['propiedades', 'update', id]);
  }

  deletePropiedad(id: number) {
    this.propiedadService.deletePropiedad(id)
      .then(() => {
        console.log("Propiedad eliminada con éxito");
        this.errorMessage = "Propiedad eliminada con éxito";
        this.propiedades = this.propiedades.filter(propiedad => propiedad.id_propiedad !== id);
      })
      .catch(error => {
        console.error("Error al eliminar la propiedad", error);
        this.errorMessage = error.response.data.message;
      });
  }
}
