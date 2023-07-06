import { Component,Inject } from '@angular/core';
import { Worker } from 'src/interfaces/worker';
import { WorkersService } from 'src/services/workers.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-worker-dialog',
  templateUrl: './worker-dialog.component.html',
  styleUrls: ['./worker-dialog.component.css']
})
export class WorkerDialogComponent {
  id!:number
  name!:string;
  department!:string
  active!:boolean
  constructor(private srv:WorkersService,@Inject(MAT_DIALOG_DATA) public data:Worker[]){}
  saveWorker()
  {
    const worker:Worker = {
      id:this.id,
      username:this.name,
      department:this.department,
      active:this.active
    }

    console.log(worker);
    this.srv.addWorker(worker).subscribe(x => {
      this.data.push(x)
      
    });
  }
}
