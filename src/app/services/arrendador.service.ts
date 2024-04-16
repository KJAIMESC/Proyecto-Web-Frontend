import { Injectable } from '@angular/core';
import axios from 'axios';
import { Arrendador } from '../models/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/arrendador';

  constructor() { }

  // Método para obtener todos los arrendadores
  getAllArrendadores(): Promise<Arrendador[]> {
    return axios.get<Arrendador[]>(this.apiUrl).then(response => {
      // Opcional: Convertir objetos literales a instancias de Arrendador si es necesario
      return response.data.map(item => new Arrendador(
        item.id_arrendador,
        item.activado,
        item.nombres,
        item.apellidos,
        item.correo,
        item.telefono,
        item.contrasena
      ));
    });
  }
}
