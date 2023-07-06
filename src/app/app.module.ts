import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideBarElementComponent } from './components/side-bar-element/side-bar-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkersComponent } from './components/workers/workers.component';
import { WorkerDetailsComponent } from './components/worker-details/worker-details.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { AddComponent } from './components/add/add.component';
import { WorkerDialogComponent } from './components/worker-dialog/worker-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarElementComponent,
    ProjectsComponent,
    WorkersComponent,
    WorkerDetailsComponent,
    ProjectComponent,
    AddComponent,
    WorkerDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
