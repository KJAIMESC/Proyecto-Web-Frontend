import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-arrendadores',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './arrendadores.component.html',
  styleUrl: './arrendadores.component.css',
})

export class ArrendadoresComponent implements OnInit{
  nombreArrendador: string = '';
  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService){}

  ngOnInit(): void {
      this.nombreArrendador = this.cookieService.get('nombres')
  }

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

  openPropiedad() {
    this.router.navigate(['propiedades'])
  }
}
