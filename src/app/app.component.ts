import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TablaPersonaComponent} from './components/tabla-persona/tabla-persona.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TablaPersonaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wapas';
}
