import { Injectable } from '@angular/core';
import axios from 'axios';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/solicitudes';
  
  constructor() { }

  getAllSolicitudes(token: string, tokenType: string): Promise<Solicitud[]> {
    return axios.get<Solicitud[]>(`${this.apiUrl}/user`, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => response.data)
    .catch(error => {
      console.error('Error al obtener todas las solicitudes:', error);
      throw error;
    });
  }

  getSolicitudById(id: number): Promise<Solicitud> {
    const url = `${this.apiUrl}/${id}`;
    return axios.get<Solicitud>(url)
      .then(response => {
        console.log("Solicitud recibida:", response.data);
        return response.data;
      })
      .catch(error => {
        console.error("Error al obtener la solicitud", error);
        throw error;
      });
  }

  getSolicitudesByPropiedadId(idPropiedad: number): Promise<Solicitud[]> {
    const url = `${this.apiUrl}/propiedad/${idPropiedad}`;
    return axios.get<Solicitud[]>(url)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener las solicitudes por ID de propiedad:', error);
        throw error;
      });
  }

  saveSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    return axios.post<Solicitud>(this.apiUrl, solicitud)
      .then(response => response.data)
      .catch(error => {
        console.error("Error al guardar la solicitud", error);
        throw error;
      });
  }

  deleteSolicitud(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error al eliminar la solicitud", error);
        throw error;
      });
  }
}
