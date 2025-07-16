import { Routes } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'create', component: StudentFormComponent },
  { path: 'edit/:id', component: StudentFormComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
