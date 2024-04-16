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

  getAllPropiedades(): Promise<Propiedad[]> {
    return axios.get<Propiedad[]>(this.apiUrl).then(response => {
      console.log("Todas las propiedades recibidas:", response.data);  
      return response.data;
    }).catch(error => {
      console.error("Error al obtener todas las propiedades", error);
      throw error;
    });
  }

  deletePropiedad(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(response => {
      console.log("Propiedad eliminada con éxito");
      return response.data;  // Aunque usualmente un DELETE no retornaría un cuerpo, depende de tu API
    }).catch(error => {
      console.error("Error al eliminar la propiedad", error);
      throw error;
    });
  }

}