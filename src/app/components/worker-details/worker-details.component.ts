import { Component,OnInit } from '@angular/core';
import { WorkersService } from 'src/services/workers.service';
import { Worker } from 'src/interfaces/worker';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.css']
})
export class WorkerDetailsComponent {
  worker!:Worker
  workerName:String=""

  constructor(private route:ActivatedRoute,private srv: WorkersService){}

  ngOnInit(){
    const id = this.route.snapshot.params['id']
    console.log(id);
    this.srv.getWorkerById(id).subscribe(res => this.worker = res)
    
  }

  modifyWorker(workerToModify:Worker){
    this.srv.modifyWorker(workerToModify).subscribe(() => console.log(workerToModify));
  }
}
