import { Injectable } from '@angular/core';
import axios from 'axios';
import { Propiedad } from '../models/propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/propiedad';

  constructor() { }

  getPropiedadById(id: number): Promise<Propiedad> {
    return axios.get<Propiedad>(`${this.apiUrl}/${id}`).then(response => {
      console.log("Propiedad recibida:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener la propiedad", error);
      throw error;
    });
  }
}