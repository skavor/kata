import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../_models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  

  constructor(private httpClient: HttpClient) { }

  addProject(body:any) {
    return this.httpClient.post<Project>(`${environment.apiUrl}/projects/addProjects`, body)
  }

  getProject() {
    return this.httpClient.get(`${environment.apiUrl}/projects`)
  }
}
