import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-arrendadores',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './arrendadores.component.html',
  styleUrl: './arrendadores.component.css',
})

export class ArrendadoresComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  getArrendador() {
    this.router.navigate(['get'], { relativeTo: this.route})
  }

  getAllArrendadores() {
    this.router.navigate(['get-all'], { relativeTo: this.route})
  }

  createArrendador() {
    this.router.navigate(['create'], { relativeTo: this.route})
  }

  updateArrendador() {
    this.router.navigate(['update'], { relativeTo: this.route})
  }

  deleteArrendador() {
    this.router.navigate(['delete'], { relativeTo: this.route})
  }
}
