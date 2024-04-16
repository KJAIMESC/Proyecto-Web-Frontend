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
  isPropertyLoaded: boolean = false;
  message: string = '';

  constructor(private propiedadService: PropiedadService) {
    this.propiedadForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      cantidadHabitaciones: new FormControl(0, [Validators.required, Validators.min(1)]),
      cantidadBanos: new FormControl(0, [Validators.required, Validators.min(1)]),
      departamento: new FormControl('', [Validators.required]),
      municipio: new FormControl('', [Validators.required]),
      permitidoMascotas: new FormControl(false),
      piscina: new FormControl(false),
      valorNoche: new FormControl(0, [Validators.required, Validators.min(0)]),
      activado: new FormControl(false),
      tipoIngresoId: new FormControl('', [Validators.required]),
      arrendadorId: new FormControl('', [Validators.required]),
      imagen: new FormControl('')
    });
  }

  ngOnInit(): void {}

  loadPropiedad(id: number) {
    if (id) {
      this.propiedadService.getPropiedadById(id).then(propiedad => {
        this.currentPropiedadId = id;
        this.propiedadForm.patchValue(propiedad);
        this.isPropertyLoaded = true;
        this.message = '';
      }).catch(error => {
        console.error('Error al cargar la propiedad:', error);
        this.message = 'Error loading property. Please check the ID.';
        this.isPropertyLoaded = false;
      });
    } else {
      this.message = 'Please enter a valid ID.';
      this.isPropertyLoaded = false;
    }
  }

  updatePropiedad() {
    if (this.propiedadForm.valid) {
      const updatedPropiedad: Propiedad = {
        ...this.propiedadForm.value,
        id_propiedad: this.currentPropiedadId, // Include the ID for PUT request
      };
      this.propiedadService.savePropiedad(updatedPropiedad).then(() => {
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