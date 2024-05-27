import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-delete-solicitud',
  templateUrl: './delete-solicitud.component.html',
  styleUrls: ['./delete-solicitud.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class DeleteSolicitudComponent {
  deleteForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });
  message: string = '';
  solicitudes: Solicitud[] = [];

  constructor(private solicitudService: SolicitudService, private cookieService: CookieService) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  getSolicitudes() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');
    console.log('Obteniendo solicitudes con token:', token, 'y tipo:', tokenType);
    this.solicitudService.getAllSolicitudes(token, tokenType).then(
      (data: Solicitud[]) => {
        if (data.length > 0) {
          this.solicitudes = data;
          console.log('Solicitudes cargadas:', this.solicitudes);
        } else {
          console.warn('No se encontraron solicitudes.');
        }
      },
      (error) => {
        console.error('Error obteniendo solicitudes:', error);
      }
    );
  }

  onDelete() {
    if (this.deleteForm.valid) {
      const id = Number(this.deleteForm.get('id')?.value);
      if (!isNaN(id) && id > 0) { 
        this.solicitudService.deleteSolicitud(id).then(() => { 
          this.message = 'Solicitud eliminada con éxito';
        }).catch(error => {
          console.error('Error al eliminar la solicitud:', error);
          this.message = error.response.data.message;
        });
      } else {
        this.message = 'Por favor ingrese un ID válido.';
      }
    } else {
      this.message = 'Por favor llene el formulario correctamente.';
    }
  }
}
