import { Component } from '@angular/core';

@Component({
  selector: 'app-save-arrendatario',
  standalone: true,
  imports: [],
  templateUrl: './save-arrendatario.component.html',
  styleUrl: './save-arrendatario.component.css'
})
export class SaveArrendatarioComponent {
<<<<<<< Updated upstream

}
=======
  arrendatarioForm: FormGroup;
  arrendatario: Arrendatario = new Arrendatario();
  message: string = '';

  constructor(private arrendatarioService: ArrendatarioService) {
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
          this.message = 'Arrendatario guardado con éxito';
        },
        error => {
          this.message = error.response.data.message;
        }
      );
  }
}
>>>>>>> Stashed changes
