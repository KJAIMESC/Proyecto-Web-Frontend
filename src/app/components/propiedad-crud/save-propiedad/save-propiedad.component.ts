import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PropiedadService } from '../../../services/propiedad.service';
import { Propiedad } from '../../../models/propiedad';
import { TipoIngresoService } from '../../../services/tipo-ingreso.service';
import { TipoIngreso } from '../../../models/tipo-ingreso.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-save-propiedad',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './save-propiedad.component.html',
  styleUrl: './save-propiedad.component.css'
})
export class SavePropiedadComponent {
  message: string = '';
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
    tipoIngresoId: new FormControl('', [Validators.required])
  });
  
  tiposIngreso: TipoIngreso[] = [];

  constructor(
    private propiedadService: PropiedadService,
    private tipoIngresoService: TipoIngresoService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.getTiposIngreso();
  }

  getTiposIngreso() {
    this.tipoIngresoService.getAllTiposIngreso().then(
      data => {
        this.tiposIngreso = data;
        console.log('Tipos de ingreso cargados:', this.tiposIngreso);
      },
      error => {
        console.error('Error al cargar los tipos de ingreso:', error);
      }
    );
  }

  savePropiedad() {
    if (this.propiedadForm.valid) {
      const formValue = this.propiedadForm.value;
      const newPropiedad: Propiedad = {
        cantidadBanos: Number(formValue.cantidadBanos), 
        tipoIngreso: { id_tipoIngreso: Number(formValue.tipoIngresoId) }
      };
      if (formValue.nombre) {
        newPropiedad.nombre = formValue.nombre;
      }
      if (formValue.descripcion) {
        newPropiedad.descripcion = formValue.descripcion;
      }
      if (formValue.cantidadHabitaciones) {
        newPropiedad.cantidadHabitaciones = Number(formValue.cantidadHabitaciones);
      }
      if (formValue.departamento) {
        newPropiedad.departamento = formValue.departamento;
      }
      if (formValue.municipio) {
        newPropiedad.municipio = formValue.municipio;
      }
      if (formValue.permitidoMascotas) {
        newPropiedad.permitido_mascotas = formValue.permitidoMascotas;
      }
      if (formValue.piscina) {
        newPropiedad.piscina = formValue.piscina;
      }
      if (formValue.valorNoche) {
        newPropiedad.valorNoche = Number(formValue.valorNoche);
      }
      if (formValue.activado) {
        newPropiedad.activado = formValue.activado;
      }
      // Obtener el token de la cookie
      const token = this.cookieService.get('token');
      const tokenType = this.cookieService.get('tokenType');

      if (token && tokenType) {
        console.log('Data to be sent:', newPropiedad);
        this.propiedadService.savePropiedad(newPropiedad, token, tokenType)
          .then(
            response => { 
              this.message = 'Propiedad guardada con éxito.';
            },
            error => {
              console.error('Error al guardar la propiedad:', error);
              this.message = error.response.data.message;
            }
          );
      } else {
        this.message = 'No se encontró la cookie de autenticación';
      }
    }
    }
  }
  
