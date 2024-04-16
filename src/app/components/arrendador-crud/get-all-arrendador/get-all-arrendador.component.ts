import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';


@Component({
  selector: 'app-get-all-arrendador',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './get-all-arrendador.component.html',
  styleUrls: ['./get-all-arrendador.component.css']
})
export class GetAllArrendadorComponent implements OnInit {
  arrendadores: Arrendador[] = [];

  constructor(private arrendadorService: ArrendadorService) {}

  ngOnInit(): void {
    this.getAllArrendador();
  }

  getAllArrendador(){
    // Externo
    this.arrendadorService.getAllArrendadores().then((post) => {
      this.arrendadores = post;
    }).catch((error) => {
      console.error(error);
    });
  }
}

