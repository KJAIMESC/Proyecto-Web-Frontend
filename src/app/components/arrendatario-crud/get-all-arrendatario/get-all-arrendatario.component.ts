import { Component } from '@angular/core';

@Component({
  selector: 'app-get-all-arrendatario',
  standalone: true,
  imports: [],
  templateUrl: './get-all-arrendatario.component.html',
  styleUrl: './get-all-arrendatario.component.css'
})
<<<<<<< Updated upstream
export class GetAllArrendatarioComponent {

=======
export class GetAllArrendatarioComponent implements OnInit {
  arrendatarios: Arrendatario[] = [];
  message: string = '';

  constructor(private arrendatarioService: ArrendatarioService, private router: Router){}

  ngOnInit(): void {
    this.getAllArrendatario();
  }

  getAllArrendatario(){
    this.arrendatarioService.getAllArrendatarios().then((post) => {
      this.arrendatarios = post;
    }).catch((error) => {
      console.error(error);
      this.message = 'Error al cargar arrendatarios';
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
        this.message = `Arrendatario con ID ${id} eliminado exitosamente.`;
      })
      .catch(error => {
        console.error("Error al eliminar el arrendatario", error);
        this.message = error.response.data.message;
      });
  }
>>>>>>> Stashed changes
}
