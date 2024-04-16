import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-arrendador',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './save-arrendador.component.html',
  styleUrl: './save-arrendador.component.css'
})

export class SaveArrendadorComponent {
  arrendadorForm: FormGroup;
  arrendador: Arrendador = new Arrendador();

  constructor(private arrendadorService: ArrendadorService) { // Fixed typo in constructor
    this.arrendadorForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]) ,
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  saveArrendador(){
    this.arrendador.nombres = this.arrendadorForm.get('nombres')?.value;
    this.arrendador.apellidos = this.arrendadorForm.get('apellidos')?.value;
    this.arrendador.correo = this.arrendadorForm.get('correo')?.value;
    this.arrendador.telefono = this.arrendadorForm.get('telefono')?.value;
    
    if (this.arrendadorForm.get('contrasena')) {
      this.arrendador.contrasena = this.arrendadorForm.get('contrasena')?.value;
    }
  
    console.log('Data to be sent:', this.arrendador);
  
    this.arrendadorService.saveArrendador(this.arrendador)
      .then(
        response => { 
          window.location.href = '/arrendadores';
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}