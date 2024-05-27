import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

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
    private arrendadorService: ArrendadorService,
    private router: Router,
    private cookieService: CookieService
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
      const id = this.cookieService.get('id');
      if (id) {
        this.searchId = +id;
        this.loadArrendador(this.searchId);
      }
    });
  }

  loadArrendador(id: number) {
    this.arrendadorService.getArrendadorById(id).then(arrendador => {
      this.currentArrendador = arrendador;
      this.currentArrendador.contrasena = ""; 
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
      const token = this.cookieService.get('token');
      const tokenType = this.cookieService.get('tokenType');

      if (token && tokenType && this.currentArrendador) {
        const updatedArrendador: Arrendador = {
          ...this.currentArrendador,
          ...this.arrendadorForm.value
        };

        this.arrendadorService.updateArrendador(updatedArrendador, token, tokenType)
          .then(response => {
            console.log('Arrendador actualizado:', response);
            this.isUpdatedSuccessfully = true;
            this.message = 'Arrendador actualizado con éxito.';
            this.router.navigate(['/perfil']); // Redirige al perfil o a la página deseada
          })
          .catch(error => {
            console.error('Error al actualizar arrendador:', error);
            this.message = 'Error al actualizar los datos del arrendador';
            this.isUpdatedSuccessfully = false;
          });
      } else {
        this.message = 'No se encontraron las cookies de autenticación';
      }
    } else {
      this.message = 'Por favor, revise los campos del formulario.';
    }
  }
} 