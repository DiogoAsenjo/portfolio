import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProject } from '../../../interface/IProject';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss',
})
export class DialogProjectComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProject
  ) {}
  public getData = signal<IProject | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal(): void {
    return this._dialogRef.close();
  }
}
