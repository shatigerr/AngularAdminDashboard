import { Component,OnInit } from '@angular/core';
import { Worker } from 'src/interfaces/worker';
import { WorkersService } from 'src/services/workers.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {
  workers:Worker[] = []
  isLoading:Boolean = true
  constructor(private srv:WorkersService){}
  ngOnInit()
  {
    this.srv.getData().subscribe(res => {
      this.workers = res
      this.isLoading = false
    })    
  }

  onDelete(worker:Worker)
  {
    this.srv.deleteWorker(worker).subscribe(() => this.workers = this.workers.filter((w) => w.id != worker.id))
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',"delete","edit"];

  mode:ProgressSpinnerMode='indeterminate'
  value=50;
}
