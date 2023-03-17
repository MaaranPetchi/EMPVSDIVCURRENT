import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeditemployeevsdivisionComponent } from './EmployeeVSDivision/addeditemployeevsdivision/addeditemployeevsdivision.component';
import { indexemployeevsdivisionComponent } from './EmployeeVSDivision/indexemployeevsdivision/indexemployeevsdivision.component';

const routes: Routes = [{ path: 'index', component:indexemployeevsdivisionComponent },
{ path: 'edit', component: AddeditemployeevsdivisionComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
