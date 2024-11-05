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
      description: 'Description',
      links: [
        {
          name: 'Conheça',
          href: 'https:site',
        },
      ],
    },
  ]);

  public openDialog(data: IProject) {
    this.dialog.open(DialogProjectComponent, {
      data,
      panelClass: 'app-dialog-project',
    });
  }
}
