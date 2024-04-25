import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../models/propiedad';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private propiedadService: PropiedadService
  ) {
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
      tipoIngresoId: new FormControl('', [Validators.required]),
      arrendadorId: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.currentPropiedadId = +id;
        this.loadPropiedad();
      }
    });
  }

  loadPropiedad() {
    if (this.currentPropiedadId) {
      this.propiedadService.getPropiedadById(this.currentPropiedadId)
        .then(propiedad => {
          this.propiedadForm.patchValue(propiedad);
          if (propiedad.tipoIngreso) {
            this.propiedadForm.get('tipoIngresoId')?.setValue(propiedad.tipoIngreso.id_tipoIngreso);
          }
          if (propiedad.arrendador) {
            this.propiedadForm.get('arrendadorId')?.setValue(propiedad.arrendador.id_arrendador);
          }
          this.isPropertyLoaded = true;
          this.message = '';
        })
        .catch(error => {
          console.error('Error cargando la propiedad:', error);
          this.message = error.response.data.message;
          this.isPropertyLoaded = false;
        });
    } else {
      this.message = 'Por favor, ingrese un ID válido.';
      this.isPropertyLoaded = false;
    }
  }
  
  

  updatePropiedad() {
    if (this.propiedadForm.valid && this.currentPropiedadId) {
      const updatedPropiedad = {
        id_propiedad: this.currentPropiedadId,
        nombre: this.propiedadForm.get('nombre')?.value,
        descripcion: this.propiedadForm.get('descripcion')?.value,
        cantidadHabitaciones: this.propiedadForm.get('cantidadHabitaciones')?.value,
        cantidadBanos: this.propiedadForm.get('cantidadBanos')?.value,
        departamento: this.propiedadForm.get('departamento')?.value,
        municipio: this.propiedadForm.get('municipio')?.value,
        permitidoMascotas: this.propiedadForm.get('permitidoMascotas')?.value,
        piscina: this.propiedadForm.get('piscina')?.value,
        valorNoche: this.propiedadForm.get('valorNoche')?.value,
        activado: false,
        tipoIngreso: {
          id_tipoIngreso: this.propiedadForm.get('tipoIngresoId')?.value
        },
        arrendador: {
          id_arrendador: this.propiedadForm.get('arrendadorId')?.value
        }
      };
      console.log('Data to be sent:', updatedPropiedad);
      this.propiedadService.updatePropiedad(updatedPropiedad)
        .then(response => {
          console.log('Property updated:', response);
          this.isUpdatedSuccessfully = true;
          this.message = 'Property updated successfully.';
        })
        .catch(error => {
          console.error('Error updating property:', error);
          if (error.response && error.response.data && error.response.data.message) {
            this.message = error.response.data.message;
          } else {
            this.message = 'An error occurred while updating the property.';
          }
          this.isUpdatedSuccessfully = false;
        });
    } else {
      this.message = 'Please check the form fields.';
    }
  }
}