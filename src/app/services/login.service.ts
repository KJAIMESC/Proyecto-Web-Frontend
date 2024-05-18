import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/jwt/security/autenticar/autenticar-correo-contrasena';

  constructor(private http: HttpClient) { }

  getToken(username: string, password: string): Observable<Login> {
    const body = { username, password };
    return this.http.post<Login>(this.apiUrl, body);
  }
}