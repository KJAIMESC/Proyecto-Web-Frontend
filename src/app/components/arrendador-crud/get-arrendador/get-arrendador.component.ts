import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';

@Component({
  selector: 'app-get-arrendador',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './get-arrendador.component.html',
  styleUrls: ['./get-arrendador.component.css']
})
export class GetArrendadorComponent {
  arrendador: Arrendador | null = null;
  errorMessage: string = '';
  searchId: string = '';

  constructor(private arrendadorService: ArrendadorService) {}

  buscarArrendador() {
    const id = Number(this.searchId);
    if (id) {
      this.arrendadorService.getArrendadorById(id).then((data) => {
        this.arrendador = data;
        this.errorMessage = '';
      }).catch((error) => {
        console.error(error);
        this.arrendador = null;
        this.errorMessage = 'Arrendador no encontrado o error en la búsqueda.';
      });
    } else {
      this.errorMessage = 'Por favor ingrese un ID válido.';
    }
  }

  onIdChange(newId: string) {
    this.searchId = newId;
  }
}
