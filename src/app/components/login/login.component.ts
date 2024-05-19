import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  login: Login | null = null;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private cookieService: CookieService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService.getToken(username, password).subscribe({
        next: (response: Login) => {
          this.login = response;
          console.log('Token recibido:', this.login.token);
          console.log('Tipo recibido:', this.login.type);
          console.log('Tipo de usuario', this.login.accType);
          console.log('Nombre usuario', this.login.nombres);
    

          if(this.login.token){
            this.cookieService.set('token', this.login.token);
          }
          if(this.login.type){
            this.cookieService.set('tokenType', this.login.type);
          }
          if(this.login.nombres){
            this.cookieService.set('nombres', this.login.nombres)
          }
          if(this.login.accType){
            this.cookieService.set('accType', this.login.accType)
            if(this.login.accType == "Arrendador"){
              this.openArrendador();
            }else if(this.login.accType == "Arrendatario"){
              this.openArrendatario();
            }
          
          }


        },
        error: (error) => {
          console.error('Error al obtener el token:', error);
          this.errorMessage = 'Error al iniciar sesión. Por favor, verifica tus credenciales.';
        }
      });
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  redirectToRegister(){
    this.router.navigateByUrl('/register')
  }

  openArrendador() {
    this.router.navigate(['arrendadores'])
  }
  openArrendatario() {
    this.router.navigate(['arrendatarios'])
  }

}
