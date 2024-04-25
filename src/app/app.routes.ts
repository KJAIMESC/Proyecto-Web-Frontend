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
import { Component } from '@angular/core';
import { ArrendatariosComponent } from './components/arrendatarios/arrendatarios.component';
import { GetArrendatarioComponent } from './components/arrendatario-crud/get-arrendatario/get-arrendatario.component';
import { GetAllArrendatarioComponent } from './components/arrendatario-crud/get-all-arrendatario/get-all-arrendatario.component';
import { SaveArrendatarioComponent } from './components/arrendatario-crud/save-arrendatario/save-arrendatario.component';
import { UpdateArrendatarioComponent } from './components/arrendatario-crud/update-arrendatario/update-arrendatario.component';
import { DeleteArrendatarioComponent } from './components/arrendatario-crud/delete-arrendatario/delete-arrendatario.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { GetSolicitudComponent } from './components/solicitudes-crud/get-solicitud/get-solicitud.component';
import { GetAllSolicitudComponent } from './components/solicitudes-crud/get-all-solicitud/get-all-solicitud.component';
import { SaveSolicitudComponent } from './components/solicitudes-crud/save-solicitud/save-solicitud.component';
import { DeleteSolicitudComponent } from './components/solicitudes-crud/delete-solicitud/delete-solicitud.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'propiedades', component: PropiedadesComponent,
        children: [
        { path: 'get', component: GetPropiedadComponent},
        { path: 'get-all', component: GetAllPropiedadComponent},
        { path: 'create', component: SavePropiedadComponent},
        { path: 'update', component: UpdatePropiedadComponent},
        { path: 'update/:id', component: UpdatePropiedadComponent},
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
        { path: 'update/:id', component: UpdateArrendadorComponent},
        { path: 'delete', component: DeleteArrendadorComponent },
      ]
    },
    {
     path: 'arrendatarios',
     component: ArrendatariosComponent,
     children: [
        { path: 'get', component: GetArrendatarioComponent },
        { path: 'get-all', component: GetAllArrendatarioComponent},
        { path: 'create', component: SaveArrendatarioComponent },
        { path: 'update', component: UpdateArrendatarioComponent },
        { path: 'update/:id', component: UpdateArrendatarioComponent},
        { path: 'delete', component: DeleteArrendatarioComponent },
     ]
    },
    {
      path: 'solicitudes',
      component: SolicitudesComponent,
      children: [
        { path: 'get', component: GetSolicitudComponent },
        { path: 'get-all', component: GetAllSolicitudComponent},
        { path: 'create', component: SaveSolicitudComponent },
        { path: 'delete', component: DeleteSolicitudComponent },
      ]
    }
];
