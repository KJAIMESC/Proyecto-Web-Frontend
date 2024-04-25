import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud';

@Component({
  selector: 'app-save-solicitud',
  templateUrl: './save-solicitud.component.html',
  styleUrls: ['./save-solicitud.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class SaveSolicitudComponent {
  solicitudForm = new FormGroup({
    fechaSolicitud: new FormControl('', [Validators.required]),
    horaSolicitud: new FormControl('', [Validators.required]),
    fechaLlegada: new FormControl('', [Validators.required]),
    fechaSalida: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    calificacion: new FormControl('', [Validators.required]),
    id_EstadoSolicitud: new FormControl('', [Validators.required]),
    id_arrendatario: new FormControl('', [Validators.required]),
    id_propiedad: new FormControl('', [Validators.required])
  });

  constructor(private solicitudService: SolicitudService) { }

  onSubmit() {
    if (this.solicitudForm.valid) {
      // Crear una nueva instancia de Solicitud basada en los valores del formulario
      const formModel = this.solicitudForm.value;
  
      const solicitud: Solicitud = {
        fechaSolicitud: formModel.fechaSolicitud ? new Date(formModel.fechaSolicitud) : null,
        horaSolicitud: formModel.horaSolicitud ? new Date(formModel.horaSolicitud) : null,
        fechaLlegada: formModel.fechaLlegada ? new Date(formModel.fechaLlegada) : null,
        fechaSalida: formModel.fechaSalida ? new Date(formModel.fechaSalida) : null,
        valor: formModel.valor ? parseFloat(formModel.valor) : null,
        calificacion: formModel.calificacion ? parseFloat(formModel.calificacion) : null,
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
      
  
      // Asegúrate de que todos los campos requeridos estén presentes antes de enviar la solicitud
      if (this.isValidSolicitud(solicitud)) {
        this.solicitudService.saveSolicitud(solicitud).then(() => {
          alert('Solicitud guardada con éxito');
        }).catch(error => {
          console.error('Error guardando la solicitud:', error);
          alert('Error al guardar la solicitud');
        });
      } else {
        alert('Por favor, complete todos los campos requeridos.');
      }
    } else {
      alert('Formulario inválido, verifique los datos ingresados.');
    }
  }
  
  isValidSolicitud(solicitud: Solicitud): boolean {
    return solicitud.fechaSolicitud !== null && solicitud.horaSolicitud !== null &&
           solicitud.fechaLlegada !== null && solicitud.fechaSalida !== null &&
           solicitud.valor !== null && solicitud.calificacion !== null;
  }
  
}
