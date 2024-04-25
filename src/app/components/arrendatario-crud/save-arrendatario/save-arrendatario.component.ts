import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Arrendatario } from '../../../models/arrendatario';
import { ArrendatarioService } from '../../../services/arrendatario.service';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-arrendatario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './save-arrendatario.component.html',
  styleUrl: './save-arrendatario.component.css'
})

export class SaveArrendatarioComponent {
  arrendatarioForm: FormGroup;
  arrendatario: Arrendatario = new Arrendatario();

  constructor(private arrendatarioService: ArrendatarioService) { // Fixed typo in constructor
    this.arrendatarioForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]) ,
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  saveArrendatario(){
    this.arrendatario.nombres = this.arrendatarioForm.get('nombres')?.value;
    this.arrendatario.apellidos = this.arrendatarioForm.get('apellidos')?.value;
    this.arrendatario.correo = this.arrendatarioForm.get('correo')?.value;
    this.arrendatario.telefono = this.arrendatarioForm.get('telefono')?.value;
    
    if (this.arrendatarioForm.get('contrasena')) {
      this.arrendatario.contrasena = this.arrendatarioForm.get('contrasena')?.value;
    }
  
    console.log('Data to be sent:', this.arrendatario);
  
    this.arrendatarioService.saveArrendatario(this.arrendatario)
      .then(
        response => { 
          window.location.href = '/arrendatarioes';
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}