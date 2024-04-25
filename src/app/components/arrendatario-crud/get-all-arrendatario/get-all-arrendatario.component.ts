import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Arrendatario } from '../../../models/arrendatario';
import { ArrendatarioService } from '../../../services/arrendatario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-all-arrendatario',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './get-all-arrendatario.component.html',
  styleUrls: ['./get-all-arrendatario.component.css']
})
export class GetAllArrendatarioComponent implements OnInit {
  arrendatarios: Arrendatario[] = [];

  constructor(private arrendatarioService: ArrendatarioService, private router: Router){}

  ngOnInit(): void {
    this.getAllArrendatario();
  }

  getAllArrendatario(){
    // Externo
    this.arrendatarioService.getAllArrendatarios().then((post) => {
      this.arrendatarios = post;
    }).catch((error) => {
      console.error(error);
    });
  }

  listUpdate(id: number){
    this.router.navigate(['arrendatarios', 'update', id]);
  }

  listDelete(id: number){
    this.arrendatarioService.deleteArrendatario(id)
      .then(() => {
        console.log("Arrendatario eliminado con éxito");
        this.arrendatarios = this.arrendatarios.filter(arrendatario => arrendatario.id_arrendatario !== id);
      })
      .catch(error => {
        console.error("Error al eliminar el arrendatario", error);
      });
  }
}
