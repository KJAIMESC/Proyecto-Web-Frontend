import { Component } from '@angular/core';
import { SaveArrendatarioComponent } from '../arrendatario-crud/save-arrendatario/save-arrendatario.component';
import { SaveArrendadorComponent } from '../arrendador-crud/save-arrendador/save-arrendador.component';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SaveArrendadorComponent, SaveArrendatarioComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  showArrendador: boolean = true;

  constructor(private router: Router){}

  toggleComponent(component: string){
    if(component === 'arrendador'){
      this.showArrendador = true;
    }else{
      this.showArrendador = false;
    }
  }

  openSesion(){
    this.router.navigate(['login'])
  }
}
