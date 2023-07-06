import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkersComponent } from './components/workers/workers.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkerDetailsComponent } from './components/worker-details/worker-details.component';

const routes: Routes = [
  {path: 'projects',component: ProjectsComponent},
  {path: 'workers',component: WorkersComponent},
  {path:'worker/details/:id',component:WorkerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
