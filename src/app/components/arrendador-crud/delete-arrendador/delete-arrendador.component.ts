import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-arrendador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-arrendador.component.html',
  styleUrls: ['./delete-arrendador.component.css']
})
export class DeleteArrendadorComponent {
  searchId: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private arrendadorService: ArrendadorService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  deleteArrendador() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');
    const id =this.cookieService.get('id');
    if (id) {
      this.arrendadorService.deleteArrendador(token, tokenType).then(() => {
        this.message = `Arrendador con ID ${id} eliminado exitosamente.`;
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