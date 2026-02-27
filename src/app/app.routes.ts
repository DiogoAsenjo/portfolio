import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Diogo Asenjo — Backend Developer'
  },
  {
    path: 'career',
    loadComponent: () =>
      import('./features/career/career.component').then(m => m.CareerComponent),
    title: 'Career — Diogo Asenjo'
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects — Diogo Asenjo'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — Diogo Asenjo'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
