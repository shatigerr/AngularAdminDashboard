import { Component,Input,Inject } from '@angular/core';
import { Worker } from 'src/interfaces/worker';
import { WorkerDialogComponent } from '../worker-dialog/worker-dialog.component';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Input() workers:any
  constructor(private matDialog: MatDialog){}
  addWorker(){
    this.matDialog.open(WorkerDialogComponent,{
      width:'350px',
      height:'500px',
      data:this.workers
    })
  }
}
