import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArrendatarioService } from '../../../services/arrendatario.service';
import { Token, TokenType } from '@angular/compiler';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-arrendatario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-arrendatario.component.html',
  styleUrls: ['./delete-arrendatario.component.css']
})
export class DeleteArrendatarioComponent {
  searchId: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private arrendatarioService: ArrendatarioService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  deleteArrendatario() {
    const token = this.cookieService.get('token');
    const tokenType = this.cookieService.get('tokenType');
    const id =this.cookieService.get('id');
    if (id) {
      this.arrendatarioService.deleteArrendatario(token, tokenType).then(() => {
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