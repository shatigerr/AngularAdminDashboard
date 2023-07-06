import { Component,OnInit } from '@angular/core';
import { ProjectsService } from 'src/services/projects.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Project } from 'src/interfaces/project';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsName:String[]=[]
  projectsAmount:number[]=[]
  projects:Project[]=[]
  totalAmount!:number
  isLoading:Boolean=true
  mode:ProgressSpinnerMode='indeterminate'
  value=50;

  constructor(private projectSrv:ProjectsService){}
  ngOnInit(){
    this.projectSrv.getProjects().subscribe(data => {
      this.projects=data
      this.projects.map(x => {
        let total= 0
        total = this.projectSrv.total(x)
        this.projectsAmount.push(total);
        this.projectsName.push(x.name);
        this.isLoading=false
      })
      // this.totalAmount = this.projectSrv.totalAmount(this.projects);
      this.renderChart(this.projectsName,this.projectsAmount,"pie","piechart")
    });
    
  }
  
  totalAmountF(project:Project[])
  {
    this.totalAmount = this.projectSrv.totalAmount(project);
    return this.totalAmount
  }

  renderChart(labels:String[],values:number[],type:any,id:any){
    const chart = new Chart(id,{
      type: type,
    data: {
      labels: labels,
      datasets: [{
        label: '# of project expenses',
        data: values,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
    })  
  }
}
