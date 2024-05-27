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

  getAllPropiedades(token: string, tokenType: string): Promise<Propiedad[]> {
    return axios.get<Propiedad[]>(`${this.apiUrl}/user`, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => {
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
      return response.data; 
    }).catch(error => {
      console.error("Error al eliminar la propiedad", error);
      throw error;
    });
  }

  savePropiedad(propiedad: Propiedad, token: string, tokenType: string): Promise<Propiedad> {
    return axios.post<Propiedad>(this.apiUrl+"/create", propiedad, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => response.data).catch(error => {
      console.error('Error al guardar la propiedad', error);
      throw error;
    });
  }

  updatePropiedad(propiedad: Propiedad): Promise<Propiedad> {
    return axios.put<Propiedad>(this.apiUrl, propiedad).then(response => response.data);
  }

  getTodasPropiedades(token: string, tokenType: string): Promise<Propiedad[]> {
    console.log('Enviando solicitud para obtener todas las propiedades con token:', token, 'y tipo:', tokenType);
    return axios.get<Propiedad[]>(this.apiUrl, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => {
      console.log("Todas las propiedades recibidas:", response.data);
      return response.data;
    }).catch(error => {
      console.error("Error al obtener todas las propiedades", error);
      throw error;
    });
  }
}

  