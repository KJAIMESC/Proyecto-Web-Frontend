import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  getPropiedad() {
    this.router.navigate(['get'], { relativeTo: this.route})
  }
  getAllPropiedades() {
    this.router.navigate(['get-all'], { relativeTo: this.route})
  }
  createPropiedad() {
    this.router.navigate(['create'], { relativeTo: this.route})
  }
  updatePropiedad() {
    this.router.navigate(['update'], { relativeTo: this.route})
  }
  deletePropiedad() {
    this.router.navigate(['delete'], { relativeTo: this.route})
  }
}
