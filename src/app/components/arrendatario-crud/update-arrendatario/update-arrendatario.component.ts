import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Arrendatario } from '../../../models/arrendatario';
import { ArrendatarioService } from '../../../services/arrendatario.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-arrendatario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-arrendatario.component.html',
  styleUrl: './update-arrendatario.component.css'
})
export class UpdateArrendatarioComponent implements OnInit {
  arrendatarioForm: FormGroup;
  currentArrendatario: Arrendatario | null = null;
  searchId: number | null = null;
  isUpdatedSuccessfully: boolean = false;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private arrendatarioService: ArrendatarioService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.arrendatarioForm = new FormGroup({
      id_arrendatario: new FormControl('', [Validators.required]),
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
        this.loadArrendatario(this.searchId);
      }
    });
  }

  loadArrendatario(id: number) {
    this.arrendatarioService.getArrendatarioById(id).then(arrendatario => {
      this.currentArrendatario = arrendatario;
      this.currentArrendatario.contrasena = ""; 
      this.arrendatarioForm.patchValue(arrendatario);
      this.isUpdatedSuccessfully = false;
      this.message = '';
    }).catch(error => {
      console.error('Error al cargar el arrendatario:', error);
      this.message = error.response.data.message;
    });
  }

  updateArrendatario() {
    if (this.arrendatarioForm.valid) {
      const token = this.cookieService.get('token');
      const tokenType = this.cookieService.get('tokenType');

      if (token && tokenType && this.currentArrendatario) {
        const updatedArrendatario: Arrendatario = {
          ...this.currentArrendatario,
          ...this.arrendatarioForm.value
        };

        this.arrendatarioService.updateArrendatario(updatedArrendatario, token, tokenType)
          .then(response => {
            console.log('Arrendatario actualizado:', response);
            this.isUpdatedSuccessfully = true;
            this.message = 'Arrendatario actualizado con éxito.';
            this.router.navigate(['/perfil']); // Redirige al perfil o a la página deseada
          })
          .catch(error => {
            console.error('Error al actualizar arrendatario:', error);
            this.message = 'Error al actualizar los datos del arrendatario';
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
