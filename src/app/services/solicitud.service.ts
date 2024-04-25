import { Injectable } from '@angular/core';
import axios from 'axios';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private apiUrl = 'http://localhost:8080/api/grupo1_6/proyecto1/solicitudes';
  

  constructor() { }

  getAllSolicitudes(): Promise<Solicitud[]> {
    return axios.get<Solicitud[]>(this.apiUrl).then(response => {
        console.log("Solicitudes recibidas:", response.data);
        return response.data;
    }).catch(error => {
        console.error("Error al obtener las solicitudes", error);
        throw error;
    });
}

getSolicitudById(id: number): Promise<Solicitud> {
    const url = `${this.apiUrl}/${id}`;
    return axios.get<Solicitud>(url).then(response => {
        console.log("Solicitud recibida:", response.data);
        return response.data;
    }).catch(error => {
        console.error("Error al obtener la solicitud", error);
        throw error;
    });
}

saveSolicitud(solicitud: Solicitud): Promise<Solicitud> {
    return axios.post<Solicitud>(this.apiUrl, solicitud).then(response => response.data);
  }

deleteSolicitud(id: number): Promise<void> {
    return axios.delete(`${this.apiUrl}/${id}`).then(response => response.data);
  }

}


  