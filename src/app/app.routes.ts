import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { ArrendadoresComponent } from './components/arrendadores/arrendadores.component';
import { GetAllArrendadorComponent } from './components/arrendador-crud/get-all-arrendador/get-all-arrendador.component';
import { SaveArrendadorComponent } from './components/arrendador-crud/save-arrendador/save-arrendador.component';
import { UpdateArrendadorComponent } from './components/arrendador-crud/update-arrendador/update-arrendador.component';
import { DeleteArrendadorComponent } from './components/arrendador-crud/delete-arrendador/delete-arrendador.component';
import { GetArrendadorComponent } from './components/arrendador-crud/get-arrendador/get-arrendador.component';
import { GetPropiedadComponent } from './components/propiedad-crud/get-propiedad/get-propiedad.component';
import { GetAllPropiedadComponent } from './components/propiedad-crud/get-all-propiedad/get-all-propiedad.component';
import { SavePropiedadComponent } from './components/propiedad-crud/save-propiedad/save-propiedad.component';
import { UpdatePropiedadComponent } from './components/propiedad-crud/update-propiedad/update-propiedad.component';
import { DeletePropiedadComponent } from './components/propiedad-crud/delete-propiedad/delete-propiedad.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'propiedades', component: PropiedadesComponent,
        children: [
        { path: 'get', component: GetPropiedadComponent},
        { path: 'get-all', component: GetAllPropiedadComponent},
        { path: 'create', component: SavePropiedadComponent},
        { path: 'update', component: UpdatePropiedadComponent},
        { path: 'delete', component: DeletePropiedadComponent}
        ]
     },
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
