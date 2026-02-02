import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TagModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  despensas = [
    {
      id: 1,
      nombre: 'Despensa Semana 1',
      estado: 'Abierta',
      totalEstimado: 1200,
      totalReal: null
    },
    {
      id: 2,
      nombre: 'Despensa Enero',
      estado: 'Finalizada',
      totalEstimado: 1500,
      totalReal: 1620
    }
  ];

  nuevaDespensa() {
    console.log('Crear nueva despensa');
  }

  abrirDespensa(id: number) {
    console.log('Abrir despensa', id);
  }

}
