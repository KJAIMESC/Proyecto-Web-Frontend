import { Component } from '@angular/core';

@Component({
  selector: 'app-get-arrendatario',
  standalone: true,
  imports: [],
  templateUrl: './get-arrendatario.component.html',
  styleUrl: './get-arrendatario.component.css'
})
export class GetArrendatarioComponent {

<<<<<<< Updated upstream
=======
  constructor(private arrendatarioService: ArrendatarioService) {}

  buscarArrendatario() {
    const id = Number(this.searchId);
    if (id) {
      this.arrendatarioService.getArrendatarioById(id).then((data) => {
        this.arrendatario = data;
        this.errorMessage = '';
      }).catch((error) => {
        console.error(error);
        this.arrendatario = null;
        this.errorMessage = error.response.data.message;
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
>>>>>>> Stashed changes
}
