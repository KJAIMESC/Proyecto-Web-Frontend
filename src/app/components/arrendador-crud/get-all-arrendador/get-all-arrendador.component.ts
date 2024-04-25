import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Arrendador } from '../../../models/arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-arrendador',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './get-all-arrendador.component.html',
  styleUrls: ['./get-all-arrendador.component.css']
})
export class GetAllArrendadorComponent implements OnInit {
  arrendadores: Arrendador[] = [];
  errorMessage: string = '';

  constructor(private arrendadorService: ArrendadorService, private router: Router){}

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

  listUpdate(id: number){
    this.router.navigate(['arrendadores', 'update', id]);
  }

  listDelete(id: number){
    this.arrendadorService.deleteArrendador(id)
      .then(() => {
        console.log("Arrendador eliminado con éxito");
        this.arrendadores = this.arrendadores.filter(arrendador => arrendador.id_arrendador !== id);
      })
      .catch(error => {
        console.error("Error al eliminar el arrendador", error);
        this.errorMessage = error.response.data.message;
      });
  }
}

