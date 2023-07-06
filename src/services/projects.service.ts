import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/interfaces/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }
  private projectUrl = "http://localhost:3000/projects" ;

  getProjects(){
    return this.http.get<Project[]>(this.projectUrl);
  }

  totalAmount(projects:Project[]){
    let total:number=0
    projects.forEach(project => {
      project.expenses.forEach(x => {
        total += x.amount
      })
      
    })
    return total
    // console.log(total);
    
  }

  total(project:Project):number{
    let total:number = 0
    project.expenses.forEach(x => total += x.amount);
    return total
  }
}
