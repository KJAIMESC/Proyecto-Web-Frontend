import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/jwt/security/autenticar/autenticar-correo-contrasena';

  constructor() { }

  getToken(correo: string, contrasena: string): Observable<Login> {
    const body = { correo, contrasena};
    return from(axios.post<Login>(this.apiUrl, body).then(response => response.data))
  }
}