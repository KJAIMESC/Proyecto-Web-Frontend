import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud';

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
successMessage: any;
errorMessage: any;

  constructor(private solicitudService: SolicitudService) { }

  onDelete() {
    if (this.deleteForm.valid) {
      const id = Number(this.deleteForm.get('id')?.value); // Convertir el valor de string a número
  
      if (!isNaN(id) && id > 0) { // Verificar que el ID es un número válido y positivo
        this.solicitudService.deleteSolicitud(id).then(() => { // Pasar el número, no el string 'id'
          alert('Solicitud eliminada con éxito');
        }).catch(error => {
          console.error('Error al eliminar la solicitud:', error);
          alert('Error al eliminar la solicitud');
        });
      } else {
        alert('Por favor ingrese un ID válido.');
      }
    } else {
      alert('Por favor complete el formulario correctamente.');
    }
  }
}
