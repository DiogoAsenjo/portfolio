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
      imgSrc: 'assets/projects/canoa.svg',
      alt: 'Logo Canoa Caiçara',
      title: 'Controle de treinos',
      width: '100px',
      height: '100px',
      description: ` 
        <p>Projeto para manter o acomapanhamento de treinos de canoa havaiana, podendo criar, editar, excluir e ordenar os treinos por tempo, velocidade, etc</p>
      `,
      technologies: `
          <p>Front: React</p>
          <p>Back: Node.js, NestJS, Typescript e Prisma</p>
          <p>Deploy: Docker e AWS</p>
          <p>Obs.: como meu free tier da AWS irá expirar em breve, é possível que o projeto não esteja mais acessível</p>
      `,
      links: [
        {
          name: 'Acesse aqui',
          href: 'https://treinoscanoa.com.br/',
        },
        {
          name: 'Repo front',
          href: 'https://github.com/DiogoAsenjo/desafio03-sistema-canoa-react',
        },
        {
          name: 'Repo back',
          href: 'https://github.com/DiogoAsenjo/desafio03-sistema-canoa',
        },
      ],
    },
    {
      imgSrc: 'assets/projects/portfolio.svg',
      alt: 'Logo Portfolio',
      title: 'Portfolio',
      width: '100px',
      height: '100px',
      description: ` 
        <p>Portfolio para aprimorar os conhecimentos em Angulas, HTML e CSS e ter um site meu simples.</p>
      `,
      technologies: `
          <p>Front: Angular</p>
          <p>Deploy: GitHub Pages</p>
      `,
      links: [
        {
          name: 'Acesse aqui',
          href: 'https://diogoasenjo.github.io/portfolio/',
        },
        {
          name: 'Repo front',
          href: 'https://github.com/DiogoAsenjo/portfolio',
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
