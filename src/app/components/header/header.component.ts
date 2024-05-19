import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  openArrendador() {
    this.router.navigate(['arrendadores'])
  }
  openPropiedad() {
    this.router.navigate(['propiedades'])
  }
  openArrendatario() {
    this.router.navigate(['arrendatarios'])
  }
  openSolicitud() {
    this.router.navigate(['solicitudes'])
  }
  openSesion(){
    this.router.navigate(['login'])
  }
  openRegistro(){
    this.router.navigate(['register'])
  }
}
