import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-arrendatarios',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './arrendatarios.component.html',
  styleUrl: './arrendatarios.component.css'
})
export class ArrendatariosComponent implements OnInit{
  nombreArrendatario : string = '';
  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService){}

  ngOnInit(): void {
      this.nombreArrendatario = this.cookieService.get('nombres')
  }
  getArrendatario() {
    this.router.navigate(['get'], { relativeTo: this.route})
  }

  getAllArrendatarios() {
    this.router.navigate(['get-all'], { relativeTo: this.route})
  }

  createArrendatario() {
    this.router.navigate(['create'], { relativeTo: this.route})
  }

  updateArrendatario() {
    this.router.navigate(['update'], { relativeTo: this.route})
  }

  deleteArrendatario() {
    this.router.navigate(['delete'], { relativeTo: this.route})
  }

  openSolicitud() {
    this.router.navigate(['solicitudes'])
  }
}
