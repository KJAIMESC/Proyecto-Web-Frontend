import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  getSolicitud() {
    this.router.navigate(['get'], { relativeTo: this.route})
  }

  getAllSolicitudes() {
    this.router.navigate(['get-all'], { relativeTo: this.route})
  }

  createSolicitud() {
    this.router.navigate(['create'], { relativeTo: this.route})
  }

  updateSolicitud() {
    this.router.navigate(['update'], { relativeTo: this.route})
  }

  deleteSolicitud() {
    this.router.navigate(['delete'], { relativeTo: this.route})
  }
}
