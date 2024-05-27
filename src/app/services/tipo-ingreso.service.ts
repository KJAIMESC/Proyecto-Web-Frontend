import { Injectable } from '@angular/core';
import axios from 'axios';
import { TipoIngreso } from '../models/tipo-ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class TipoIngresoService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/tipoIngreso';
  
  constructor() { }

  getAllTiposIngreso(): Promise<TipoIngreso[]> {
    return axios.get<TipoIngreso[]>(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener los tipos de ingreso:', error);
        throw error;
      });
  }
  
}
