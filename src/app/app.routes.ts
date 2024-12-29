import { Routes } from '@angular/router';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';

export const routes: Routes = [
  {
    path: 'question1',
    component: Question1Component,
  },
  {
    path: 'question2',
    component: Question2Component,
  },
];
