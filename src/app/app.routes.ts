import { Routes } from '@angular/router';
import {TablaPersonaComponent} from './components/tabla-persona/tabla-persona.component';
import {FormularioPersonaComponent} from './components/formulario-persona/formulario-persona.component';
import {Componente3Component} from './components/componente3/componente3.component';

export const routes: Routes = [
  {path: 'tabla', component: TablaPersonaComponent},
  {path: 'formulario', component: FormularioPersonaComponent},
  {path: 'c3', component: Componente3Component},
];
