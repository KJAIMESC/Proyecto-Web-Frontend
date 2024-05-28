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

  saveSolicitud(solicitud: Solicitud, token: string, tokenType: string): Promise<Solicitud> {
    return axios.post<Solicitud>(this.apiUrl+"/create", solicitud, {
      headers: {
        'Authorization': `${tokenType} ${token}`
      }
    }).then(response => response.data).catch(error => {
      console.error('Error al guardar la solicitud', error);
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

    // Función para calificar una solicitud
    calificarSolicitud(id: number, calificacion: number): Promise<Solicitud> {
      if (calificacion < 0 || calificacion > 10) {
        return Promise.reject(new Error("La calificación debe estar entre 0 y 10."));
      }
  
      return this.getSolicitudById(id).then(solicitud => {
        solicitud.calificacion = calificacion; // Asegúrate de tener un campo calificacion en el modelo Solicitud
  
        // Actualizar la solicitud con la nueva calificación
        return this.updateCalificacion(solicitud);
      }).catch(error => {
        console.error("Error al calificar la solicitud", error);
        throw error;
      });
    }
  
  // Función para actualizar la calificación de una solicitud
  async updateCalificacion(solicitud: Solicitud): Promise<Solicitud> {
    const updateUrl = `${this.apiUrl}/updateCalificacion/${solicitud.id_solicitud}`;
    try {
        const response = await axios.put<Solicitud>(updateUrl, solicitud);
        console.log("Solicitud actualizada con calificación:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la calificación de la solicitud", error);
        throw error;
    }
}
}
