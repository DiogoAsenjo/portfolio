import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  public arrayProject = signal<IProject[]>([
    {
      imgSrc: 'assets/projects/canoaCaicara.jpg',
      alt: 'Logo Canoa Caiçara',
      title: 'Controle de treinos',
      width: '100px',
      height: '51px',
      description: 'Description',
      links: [
        {
          name: 'Conheça',
          href: 'https:site',
        },
      ],
    },
  ]);
}
