import { Component, OnInit } from '@angular/core';
import { Arrendador } from '../../models/arrendador';
import { ArrendadorService } from '../../services/arrendador.service';

@Component({
  selector: 'app-get-all-arrendador',
  standalone: true,
  imports: [ArrendadorService],  
  templateUrl: './get-all-arrendador.component.html',
  styleUrls: ['./get-all-arrendador.component.css']
})
export class GetAllArrendadorComponent implements OnInit {
  arrendadores: Arrendador[] = [];

  constructor(private arrendadorService: ArrendadorService) {}

  ngOnInit(): void {
    this.arrendadorService.getAllArrendadores().then(data => {
      this.arrendadores = data;
    }).catch(error => {
      console.error('Error fetching arrendadores', error);
    });
  }
}
