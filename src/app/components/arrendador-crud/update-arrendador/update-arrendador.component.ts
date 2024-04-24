import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-arrendador',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-arrendador.component.html',
  styleUrl: './update-arrendador.component.css'
})
export class UpdateArrendadorComponent implements OnInit {
  arrendadorForm: FormGroup;
  currentArrendador: Arrendador | null = null;
  searchId: number | null = null;
  isUpdatedSuccessfully: boolean = false;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private arrendadorService: ArrendadorService
  ) {
    this.arrendadorForm = new FormGroup({
      id_arrendador: new FormControl('', [Validators.required]),
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.searchId = +id;
        this.loadArrendador(this.searchId);
      }
    });
  }

  loadArrendador(id: number) {
    this.arrendadorService.getArrendadorById(id).then(arrendador => {
      this.currentArrendador = arrendador;
      this.arrendadorForm.patchValue(arrendador);
      this.isUpdatedSuccessfully = false;
      this.message = '';
    }).catch(error => {
      console.error('Error al cargar el arrendador:', error);
      this.message = error.response.data.message;
    });
  }

  updateArrendador() {
    if (this.arrendadorForm.valid) {
      this.arrendadorService.saveArrendador(this.arrendadorForm.value as Arrendador)
        .then(response => {
          console.log('Arrendador actualizado:', response);
          this.isUpdatedSuccessfully = true;
          this.message = 'Arrendador actualizado con éxito.';
        })
        .catch(error => {
          console.error('Error al actualizar arrendador:', error);
          this.message = error.response.data.message;
          this.isUpdatedSuccessfully = false;
        });
    } else {
      this.message = 'Please check the form fields.';
    }
  }
}