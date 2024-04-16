import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Propiedad } from '../../../models/propiedad';
import { PropiedadService } from '../../../services/propiedad.service';

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

  constructor(private propiedadService: PropiedadService) {}

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
}
