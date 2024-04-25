import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud';
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
    valor: new FormControl('', [Validators.required]),
    id_EstadoSolicitud: new FormControl('', [Validators.required]),
    id_arrendatario: new FormControl('', [Validators.required]),
    id_propiedad: new FormControl('', [Validators.required])
  });

  constructor(private solicitudService: SolicitudService) { }

  onSubmit() {
    if (this.solicitudForm.valid) {
      const formModel = this.solicitudForm.value;
  
      const solicitud: Solicitud = {
        fechaSolicitud: moment.utc().subtract(5, 'hours').toDate(),
        horaSolicitud: moment.utc().subtract(5, 'hours').toDate(),
        fechaLlegada: formModel.fechaLlegada ? new Date(formModel.fechaLlegada) : null,
        fechaSalida: formModel.fechaSalida ? new Date(formModel.fechaSalida) : null,
        valor: formModel.valor ? parseFloat(formModel.valor) : null,
        calificacion: null,
        estadoSolicitud: {
          id_EstadoSolicitud: formModel.id_EstadoSolicitud ? parseFloat(formModel.id_EstadoSolicitud):0,
          estado: 'pendiente' 
        },
        arrendatario: {
          id_arrendatario: formModel.id_arrendatario ? parseFloat(formModel.id_arrendatario):0,
          nombres: 'pendiente' 

        },
        propiedad: {
          id_propiedad: formModel.id_propiedad ? parseFloat(formModel.id_propiedad):0,
          nombre: 'pendiente' 

        }
        
      };
      
      if (this.isValidSolicitud(solicitud)) {
        this.solicitudService.saveSolicitud(solicitud).then(() => {
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
