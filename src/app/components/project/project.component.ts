import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectComponent } from '../dialog/dialog-project/dialog-project.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  readonly dialog = inject(MatDialog);
  public arrayProject = signal<IProject[]>([
    {
      imgSrc: 'assets/projects/canoaCaicara.jpg',
      alt: 'Logo Canoa Caiçara',
      title: 'Controle de treinos',
      width: '100px',
      height: '51px',
      description: ` <p>Projeto para manter o acomapnhamento de treinos, podendo criar, editar, excluir e ordenar os treinos por tempo, velocidade, etc'</P>

      <h3>Tecnologias utilizadas</h3>

      <ul>
        <li>Front: React</li>
        <li>Back: Node.js, NestJS, Typescript e Prisma</li>
        <li>Deploy: Docker e AWS</li>
      </ul>
      `,
      links: [
        {
          name: 'Repo front',
          href: 'https:site',
        },
        {
          name: 'Repo front',
          href: 'https:site',
        },
      ],
    },
  ]);

  public openDialog(data: IProject) {
    this.dialog.open(DialogProjectComponent, {
      data,
    });
  }
}
