import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      summary: {
        strong: 'Desenvolvedor Automações',
        p: 'ModalGR | Fevereiro 2024 -  Presente',
      },
      text: '<p>Texto bosta</p> <p>Texto bosta 2</p>',
    },
    {
      summary: {
        strong: 'Estagiário',
        p: 'ModalGR | Julho 2023 -  Fevereiro 2024',
      },
      text: '<p>Texto bosta</p> <p>Texto bosta 2</p>',
    },
  ]);
}
