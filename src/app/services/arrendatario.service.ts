import { Injectable } from '@angular/core';
import axios from 'axios';
import { Arrendatario } from '../models/arrendatario';

@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/arrendatario';
  

  constructor() { }

  getAllArrendatarios(): Promise<Arrendatario[]> {
    return axios.get<Arrendatario[]>(this.apiUrl).then(response => {
      console.log("Datos recibidos:", response.data);  
      return response.data;
    });
  }

  getArrendatarioById(id: number): Promise<Arrendatario> {
    const url = `${this.apiUrl}/${id}`;
    return axios.get<Arrendatario>(url).then(response => {
      console.log("Arrendador recibido:", response.data);
      return response.data;
    });
  }

  deleteArrendatario(token: string, tokenType: string): Promise<void> {
    return axios.delete(`${this.apiUrl}/delete`, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => {
      console.log("Arrendatario eliminado con éxito");
      return response.data;
    }).catch(error => {
      console.error("Error al eliminar el arrendatario", error);
      throw error;
    });
  }  

  saveArrendatario(arrendador: Arrendatario): Promise<Arrendatario> {
    return axios.post<Arrendatario>(this.apiUrl, arrendador).then(response => response.data);
  }

  updateArrendatario(arrendatario: Arrendatario, token: string, tokenType: string): Promise<Arrendatario> {
    return axios.put<Arrendatario>(`${this.apiUrl}/update`, arrendatario, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => response.data).catch(error => {
      console.error('Error al actualizar los datos del arrendatario', error);
      throw error;
    });
  }
}