import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../models/propiedad';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-propiedad',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './save-propiedad.component.html',
  styleUrl: './save-propiedad.component.css'
})
export class SavePropiedadComponent {
  propiedadForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    cantidadHabitaciones: new FormControl('', [Validators.required]),
    cantidadBanos: new FormControl('', [Validators.required]),
    departamento: new FormControl('', [Validators.required]),
    municipio: new FormControl('', [Validators.required]),
    permitidoMascotas: new FormControl(false),
    piscina: new FormControl(false),
    valorNoche: new FormControl('', [Validators.required]),
    activado: new FormControl(false),
    tipoIngresoId: new FormControl('', [Validators.required]),
    arrendadorId: new FormControl('', [Validators.required])
  });

  constructor(private propiedadService: PropiedadService) {}

  savePropiedad() {
    if (this.propiedadForm.valid) {
      const formValue = this.propiedadForm.value;
      const newPropiedad: Propiedad = {
        ...formValue,
        tipoIngreso: { id_tipoIngreso: Number(formValue.tipoIngresoId) },
        arrendador: { id_arrendador: Number(formValue.arrendadorId) }
      };

      this.propiedadService.savePropiedad(newPropiedad)
        .then(() => alert('Propiedad guardada con éxito'))
        .catch(error => console.error('Error al guardar la propiedad:', error));
    }
  }
}