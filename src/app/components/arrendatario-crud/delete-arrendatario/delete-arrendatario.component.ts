import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-arrendatario',
  standalone: true,
  imports: [],
  templateUrl: './delete-arrendatario.component.html',
  styleUrl: './delete-arrendatario.component.css'
})
export class DeleteArrendatarioComponent {
<<<<<<< Updated upstream

}
=======
  searchId: string = '';
  message: string = '';

  constructor(private arrendatarioService: ArrendatarioService) {}

  deleteArrendatario() {
    const id = Number(this.searchId);
    if (id) {
      this.arrendatarioService.deleteArrendatario(id).then(() => {
        this.message = `Arrendatario con ID ${id} eliminado exitosamente.`;
      }).catch((error) => {
        console.error(error);
        this.message = error.response.data.message;
      });
    } else {
      this.message = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}
>>>>>>> Stashed changes
