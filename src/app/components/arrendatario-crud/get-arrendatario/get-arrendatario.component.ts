import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Arrendatario } from '../../../models/arrendatario';
import { ArrendatarioService } from '../../../services/arrendatario.service';

@Component({
  selector: 'app-get-arrendatario',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './get-arrendatario.component.html',
  styleUrls: ['./get-arrendatario.component.css']
})
export class GetArrendatarioComponent {
  arrendatario: Arrendatario | null = null;
  errorMessage: string = '';
  searchId: string = '';

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
        this.errorMessage = 'Arrendatario no encontrado o error en la búsqueda.';
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}
