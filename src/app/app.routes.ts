import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { ArrendadoresComponent } from './components/arrendadores/arrendadores.component';
import { GetAllArrendadorComponent } from './components/get-all-arrendador/get-all-arrendador.component';
import { SaveArrendadorComponent } from './components/save-arrendador/save-arrendador.component';
import { UpdateArrendadorComponent } from './components/update-arrendador/update-arrendador.component';
import { DeleteArrendadorComponent } from './components/delete-arrendador/delete-arrendador.component';
import { GetArrendadorComponent } from './components/get-arrendador/get-arrendador.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'propiedades', component: PropiedadesComponent },
    { 
      path: 'arrendadores', 
      component: ArrendadoresComponent,
      children: [
        { path: 'get', component: GetArrendadorComponent },
        { path: 'get-all', component: GetAllArrendadorComponent},
        { path: 'create', component: SaveArrendadorComponent },
        { path: 'update', component: UpdateArrendadorComponent },
        { path: 'delete', component: DeleteArrendadorComponent },
      ]
    },
];
