import { Injectable } from '@angular/core';
import axios from 'axios';
import { Arrendador } from '../models/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/arrendador';
  

  constructor() { }

  getAllArrendadores(): Promise<Arrendador[]> {
    return axios.get<Arrendador[]>(this.apiUrl).then(response => {
      console.log("Datos recibidos:", response.data);  
      return response.data;
    });
  }

  getArrendadorById(id: number): Promise<Arrendador> {
    const url = `${this.apiUrl}/${id}`;
    return axios.get<Arrendador>(url).then(response => {
      console.log("Arrendador recibido:", response.data);
      return response.data;
    });
  }

  deleteArrendador(token: string, tokenType: string): Promise<void> {
    return axios.delete(`${this.apiUrl}/delete`, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => {
      console.log("Arrendador eliminado con éxito");
      return response.data;
    }).catch(error => {
      console.error("Error al eliminar el arrendador", error);
      throw error;
    });
  }  

  saveArrendador(arrendador: Arrendador): Promise<Arrendador> {
    return axios.post<Arrendador>(this.apiUrl, arrendador).then(response => response.data);
  }

  updateArrendador(arrendador: Arrendador, token: string, tokenType: string): Promise<Arrendador> {
    return axios.put<Arrendador>(`${this.apiUrl}/update`, arrendador, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => response.data).catch(error => {
      console.error('Error al actualizar los datos del arrendador', error);
      throw error;
    });
  }
}