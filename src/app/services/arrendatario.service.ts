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

  deleteArrendatario(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(response => {
      console.log("Arrendador eliminado con éxito");
      return response.data;
    }).catch(error => {
      console.error("Error al eliminar el arrendador", error);
      throw error;
    });
  }  

  saveArrendatario(arrendador: Arrendatario): Promise<Arrendatario> {
    return axios.post<Arrendatario>(this.apiUrl, arrendador).then(response => response.data);
  }
}