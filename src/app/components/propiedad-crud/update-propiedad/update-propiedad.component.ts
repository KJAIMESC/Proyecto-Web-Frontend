import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../models/propiedad';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-propiedad',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-propiedad.component.html',
  styleUrls: ['./update-propiedad.component.css']
})
export class UpdatePropiedadComponent implements OnInit {
  propiedadForm: FormGroup;
  currentPropiedadId: number | null = null;
  isUpdatedSuccessfully: boolean = false;
  message: string = '';

  constructor(private propiedadService: PropiedadService) {
    this.propiedadForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      cantidadHabitaciones: new FormControl('', [Validators.required, Validators.min(1)]),
      cantidadBanos: new FormControl('', [Validators.required, Validators.min(1)]),
      departamento: new FormControl('', [Validators.required]),
      municipio: new FormControl('', [Validators.required]),
      permitidoMascotas: new FormControl(''),
      piscina: new FormControl(''),
      valorNoche: new FormControl('', [Validators.required, Validators.min(0)]),
      activado: new FormControl(''),
      tipoIngresoId: new FormControl('', [Validators.required]),
      arrendadorId: new FormControl('', [Validators.required]),
      imagen: new FormControl('')
    });
  }

  ngOnInit(): void {}

  loadPropiedad(id: number | null) {
    if (id == null) {  // Verifica explícitamente si el id es null o undefined
      console.error('Intento de cargar una propiedad sin un ID válido.');
      this.message = 'Please provide a valid property ID.';
      return;  // Salir temprano para evitar más ejecución.
    }
  
    this.propiedadService.getPropiedadById(id).then(propiedad => {
      this.currentPropiedadId = id;
      this.propiedadForm.patchValue({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        cantidadHabitaciones: propiedad.cantidad_habitaciones,
        cantidadBanos: propiedad.cantidad_banos,
        departamento: propiedad.departamento,
        municipio: propiedad.municipio,
        permitidoMascotas: propiedad.permitido_mascotas,
        piscina: propiedad.piscina,
        valorNoche: propiedad.valor_noche,
        activado: propiedad.activado,
        tipoIngresoId: propiedad.tipoIngreso?.id_tipoIngreso,
        arrendadorId: propiedad.arrendador?.id_arrendador,
        imagen: propiedad.imagen
      });
      this.message = '';  // Limpia cualquier mensaje de error anterior.
    }).catch(error => {
      console.error('Error al cargar la propiedad:', error);
      this.message = 'Error loading property. Please check the ID.';
    });
  }
  

  updatePropiedad() {
    if (this.propiedadForm.valid) {
      const updatedPropiedad: Propiedad = {
        ...this.propiedadForm.value,
        id_propiedad: this.currentPropiedadId, // Include the ID for PUT request
        tipoIngreso: { id_tipoIngreso: Number(this.propiedadForm.value.tipoIngresoId) },
        arrendador: { id_arrendador: Number(this.propiedadForm.value.arrendadorId) }
      };
      this.propiedadService.updatePropiedad(updatedPropiedad).then(() => {
        this.isUpdatedSuccessfully = true;
        this.message = 'Propiedad actualizada con éxito.';
      }).catch(error => {
        console.error('Error updating propiedad:', error);
        this.isUpdatedSuccessfully = false;
        this.message = 'Error updating property.';
      });
    }
  }
}