import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'propiedades', component: PropiedadesComponent}
];
