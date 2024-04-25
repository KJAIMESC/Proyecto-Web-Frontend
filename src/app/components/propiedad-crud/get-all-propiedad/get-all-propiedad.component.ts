import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../../../models/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-propiedad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-propiedad.component.html',
  styleUrls: ['./get-all-propiedad.component.css']
})
export class GetAllPropiedadComponent implements OnInit {
  propiedades: Propiedad[] = [];
  errorMessage: string = '';

  constructor(private propiedadService: PropiedadService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllPropiedades();
  }

  loadAllPropiedades() {
    this.propiedadService.getAllPropiedades().then(data => {
      this.propiedades = data;
    }).catch(error => {
      console.error('Error al cargar todas las propiedades:', error);
      this.errorMessage = 'Error al cargar propiedades';
    });
  }

  updatePropiedad(id: number) {
    this.router.navigate(['propiedades', 'update', id]);
  }

  deletePropiedad(id: number) {
    this.propiedadService.deletePropiedad(id)
      .then(() => {
        console.log("Propiedad eliminada con éxito");
        this.propiedades = this.propiedades.filter(propiedad => propiedad.id_propiedad !== id);
      })
      .catch(error => {
        console.error("Error al eliminar la propiedad", error);
        this.errorMessage = error.response.data.message;
      });
  }
}
