import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../models/propiedad';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import moment, { Moment } from 'moment-timezone'

@Component({
  selector: 'app-save-solicitud',
  templateUrl: './save-solicitud.component.html',
  styleUrls: ['./save-solicitud.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class SaveSolicitudComponent {
  message: string = '';
  solicitudForm = new FormGroup({
    fechaLlegada: new FormControl('', [Validators.required]),
    fechaSalida: new FormControl('', [Validators.required]),
    id_propiedad: new FormControl('', [Validators.required])
  });

  propiedades: any[] = []; // Para almacenar las propiedades disponibles

  constructor(
    private solicitudService: SolicitudService,
    private propiedadService: PropiedadService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.getPropiedades();
  }

  getPropiedades() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');
    console.log('Obteniendo propiedades con token:', token, 'y tipo:', tokenType);
    this.propiedadService.getTodasPropiedades(token, tokenType).then(
      (data: Propiedad[]) => {
        if (data.length > 0) {
          this.propiedades = data;
          console.log('Propiedades cargadas:', this.propiedades);
        } else {
          console.warn('No se encontraron propiedades.');
        }
      },
      (error) => {
        console.error('Error obteniendo propiedades:', error);
      }
    );
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      const formModel = this.solicitudForm.value;
  
      const solicitud: Solicitud = {
       
        fechaLlegada: formModel.fechaLlegada ? new Date(formModel.fechaLlegada) : null,
        fechaSalida: formModel.fechaSalida ? new Date(formModel.fechaSalida) : null,
        propiedad: {
          id_propiedad: formModel.id_propiedad ? parseFloat(formModel.id_propiedad):0,
          nombre: 'pendiente' 

        }
        
      };
      
      if (this.isValidSolicitud(solicitud)) {
      const token = this.cookieService.get('token');
      const tokenType = this.cookieService.get('tokenType');
        this.solicitudService.saveSolicitud(solicitud, token, tokenType).then(() => {
          this.message = 'Solicitud guardada con éxito';
        }).catch(error => {
          console.error('Error guardando la solicitud:', error);
          this.message = error.response.data.message;
        });
      } else {
        this.message = 'Por favor, complete todos los campos requeridos.';
      }
    } else {
      this.message = 'Formulario inválido, verifique los datos ingresados.';
    }
  }
  
  isValidSolicitud(solicitud: Solicitud): boolean {
    return solicitud.fechaLlegada !== null && solicitud.fechaSalida !== null &&
           solicitud.valor !== null;
  }
  
}
