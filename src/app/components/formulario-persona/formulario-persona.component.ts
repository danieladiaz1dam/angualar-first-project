import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario-persona',
  imports: [
    FormsModule
  ],
  templateUrl: './formulario-persona.component.html',
  styleUrl: './formulario-persona.component.css'
})
export class FormularioPersonaComponent {

  saludar() {
    alert("Hola mi niña");
  }
}
