import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from 'src/interfaces/worker';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  private url = 'http://localhost:3000/workers'
  constructor(private http: HttpClient) { }

  getData():Observable<Worker[]>{
    return this.http.get<Worker[]>(this.url)
  }

  addWorker(worker:Worker){
    return this.http.post<Worker>(this.url,worker)
  }

  deleteWorker(worker:Worker){
    return this.http.delete(`${this.url}/${worker.id }`) 
  }

  getWorkerById(id:Number):Observable<Worker>
  {
    return this.http.get<Worker>(`${this.url}/${id}`)
  }

  modifyWorker(worker:Worker){
    return this.http.put(`${this.url}/${worker.id}`,worker);
  }

}
