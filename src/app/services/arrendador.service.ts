import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      console.log("Datos recibidos:", response.data);  // Esto mostrará los datos en la consola
      return response.data;
    });
  }
}
  
