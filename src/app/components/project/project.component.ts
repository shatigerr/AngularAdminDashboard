import { Component,Input } from '@angular/core';
import { Project } from 'src/interfaces/project';
import { ProjectsService } from 'src/services/projects.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private srv:ProjectsService){}
@Input() project!:Project
@Input() totalAmount!:number
total(project:Project):number{
   let total:number = 0
  // project.expenses.forEach(x => total += x.amount);
  // return total
  total = this.srv.total(project)
  return total

}

// totalAmount:number = this.total(this.project);

}
